import { AdminApi } from "@api";
import { StudentContext } from "@context";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Collapse } from "antd";
import { AdminClasses } from "@classes";
import { StudentDataInterface } from "@classes/admin/StudentData";
import PieChart from "@components/Charts/Pie";
import { ProjectText } from "@components";
import { formatDateByTimestamp } from "@utils";
import "./styles.scss";
import Theme from "@themes/theme";
const statuses = [
  { name: "Novo", color: Theme.color.info.default.main },
  { name: "Estudada", color: Theme.color.warning.default.main },
  { name: "Aprendida", color: Theme.color.success.default.main },
  { name: "Reaprendida", color: Theme.color.lime.default.main },
  { name: "Revisada", color: Theme.color.cyan.default.main },
];

export default () => {
  const { student } = useContext(StudentContext);
  const { studentId } = useParams();
  const [selectedStudentData, setSelectedStudentData] =
    useState<StudentDataInterface>();

  useEffect(() => {
    AdminApi.getStudentData(student?.code as string, studentId as string).then(
      (res) => {
        const cardsByChapters: any[] = Array.from(
          { length: res.chaptersCount },
          () => []
        );
        const decksByChapters: any[] = cardsByChapters;
        for (const card of res.studentData) {
          cardsByChapters[card.chapter - 1].push({ ...card });
        }

        var deckFlag = 0;
        var flag = 0;
        for (const chapter of cardsByChapters) {
          const lastChapterDeck = chapter[chapter.length - 1].deck;
          decksByChapters[flag] = Array.from(
            { length: lastChapterDeck - deckFlag },
            () => []
          );
          chapter.map((card: any) => {
            decksByChapters[flag][card.deck - (deckFlag + 1)].push(card);
          });
          deckFlag = lastChapterDeck;
          flag += 1;
        }

        const data = new AdminClasses.StudentData({
          code: res.student.code,
          name: res.student.name,
          timestamp: res.student.study_timestamp,
          chapters: decksByChapters,
        });
        setSelectedStudentData(data);
      }
    );
  }, []);

  return (
    <main className="student-data-container">
      {selectedStudentData && (
        <div className="student-data-content">
          <ProjectText headerLevel={5}>
            Aluno: {selectedStudentData.name}
          </ProjectText>
          <ProjectText headerLevel={5}>
            Matrícula: {selectedStudentData.code}
          </ProjectText>
          {selectedStudentData.timestamp ? (
            <ProjectText headerLevel={5}>
              Última sessão de estudos:{" "}
              {formatDateByTimestamp(selectedStudentData.timestamp)}
            </ProjectText>
          ) : (
            <div />
          )}
          <Collapse
            items={selectedStudentData.chapters.map((chapter) => ({
              key: chapter.id,
              label: `Capítulo ${chapter.id}`,
              children: (
                <div className="decks-details">
                  {chapter.decks.map((deck) => (
                    <div className="deck-chart" key={deck.id}>
                      <ProjectText headerLevel={5}>
                        Capítulo: {chapter.id}.{deck.id}
                      </ProjectText>
                      <PieChart
                        width={150}
                        title=""
                        label="Questões"
                        description={statuses}
                        data={[
                          deck.statusCount.new,
                          deck.statusCount.studied,
                          deck.statusCount.learned,
                          deck.statusCount.relearned,
                          deck.statusCount.reviewed,
                        ]}
                      />
                    </div>
                  ))}
                </div>
              ),
            }))}
          />
        </div>
      )}
    </main>
  );
};
