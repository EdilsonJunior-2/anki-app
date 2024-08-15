import { Modal, ModalProps } from "antd";

import "./styles.scss";

export default ((props: ModalProps) => {
    return <Modal closable={false} title="Como estudar" open={props.open} footer={
        <button onClick={props.onOk}>Ok</button>
    }>
        <p>Bem vindo ao nosso sistema de estudo de neuroanatomia!</p>
        <p>O processo básico de estudo é simples. Aqui vão algumas informações que podem ser úteis para que você não se perca:</p>
        <ul>
            <li>Cada tópico de estudo vai te apresentar até 12 cartóes de estudo por vez para serem analisados. Você deve analisar o que te é mostrado e tentar acertar a resposta (lembre-se de anotar antes de prosseguir);</li>
            <li>Após você chegar a uma conclusão, pode clicar em "relevar resposta" e verificar se acertou ou não;</li>
            <li>Com a resposta correta em mãos, você deve fazer uma avaliação da dificuldade da resposta. A sua escolha vai impactar em que momento aquela pergunta em questão irá aparecer para ser revisada no futuro (escolher "De novo" fará com que a pergunta reapareça na mesma sessão de estudo em questão);</li>
        </ul>
        <p>Existem dois tipos de pergunta no questionário:</p>
        <ul>
            <li>Identificação de imagens (uma imagem de uma área do sistema nervoso aparecerá na tela, e você deve dizer qual o nome da parte destacada em verde);</li>
            <li>Discursiva (uma questão aparecerá em tela e você deverá elaborar uma resposta condizente).</li>
        </ul>
        <p>É isto, bons estudos :D</p>
    </Modal>
})
