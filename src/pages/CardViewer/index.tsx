import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { StudyContext, StudentContext } from "@context";
import { StudentCard } from "@classes";
import { indexLoop } from "@utils";
import { useNavigate } from "react-router";

import { changeCardRating, sendNewRatings } from "../../spacedRepetition";
import "./styles.scss";
import { Skeleton } from "antd";
import { ProjectCard, TopBar } from "@components";

export default () => {
  const [answerFlag, showAnswer] = useState(false);
  const [index, setIndex] = useState<number>(0);
  const [newRatedCards, setNewRatedCards] = useState<StudentCard[]>([]);

  const { studentCode, deckId } = useParams();
  const navigate = useNavigate();

  const { pickCards, cards, setCards, currentChapter } =
    useContext(StudyContext);
  const { student } = useContext(StudentContext);

  function timeToRest() {
    sendNewRatings(newRatedCards, student?.code as string).then(() => {
      navigate("/student");
    });
  }

  function updateRating(rating: number) {
    showAnswer(false);
    changeCardRating(cards[index], rating);
    const newCardArray = cards;
    if (cards[index].rating !== 4) {
      setNewRatedCards([...newRatedCards, cards[index]]);
      newCardArray.splice(index, 1);
      if (index >= newCardArray.length) setIndex(0);
      setCards(newCardArray);
    } else {
      cards[index].repetitions += 1;
      setIndex(indexLoop(newCardArray, index));
    }
  }

  useEffect(() => {
    pickCards(Number(deckId), studentCode as string);
  }, []);

  return (
    <main className="card-viewer">
      <TopBar title={`Capítulo ${currentChapter}`} hideOptions showBackButton />
      {cards.length > 0 ? (
        <div className="card-content">
          <ProjectCard
            wrap
            key={cards[index].type}
            actionColumns={answerFlag ? 2 : 1}
            title={
              <div
                dangerouslySetInnerHTML={{ __html: cards[index].question }}
              />
            }
            actions={
              answerFlag
                ? [
                    <button onClick={() => updateRating(4)}>De novo</button>,
                    <button onClick={() => updateRating(3)}>Difícil</button>,
                    <button onClick={() => updateRating(2)}>Médio</button>,
                    <button onClick={() => updateRating(1)}>Fácil</button>,
                  ]
                : [
                    <button onClick={() => showAnswer(true)}>
                      Ver resposta
                    </button>,
                  ]
            }
          >
            <p className="card-answer">
              <Skeleton
                loading={!answerFlag}
                title={false}
                paragraph={{ rows: 1, width: 128 }}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: cards[index].answer }}
                />
              </Skeleton>
            </p>
          </ProjectCard>
        </div>
      ) : (
        <>
          <p>Todos os cartões da sessão estudados</p>
          <button onClick={timeToRest}>Voltar</button>
        </>
      )}
    </main>
  );
};
