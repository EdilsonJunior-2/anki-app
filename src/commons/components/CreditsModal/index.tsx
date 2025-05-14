import { Modal, ModalProps } from "antd";

import "./styles.scss";

export default (props: ModalProps) => {
  return (
    <Modal
      closable={false}
      title="Créditos e Referências"
      open={props.open}
      footer={<button onClick={props.onOk}>Ok</button>}
    >
      <p>Este site utiliza conteúdo do livro:</p>
      <p>
        Maffia Bizzozero, Santiago. Atlas de anatomía humana / Santiago Maffia
        Bizzozero; José Miguel Palacios Jaraquemada; Joaquín María Ricagno.
      </p>
      <p>Compilado por Santiago Maffia Bizzozero.</p>
      <p>Editado por Joaquín María Ricagno.</p>
      <p>Prólogo de José Miguel Palacios Jaraquemada.</p>
      <p> 1ª edição para o aluno.</p>
      <p>
        Ciudad Autónoma de Buenos Aires: Santiago Maffia Bizzozero, 2018. ISBN
        978-987-778-560-9.
      </p>
      <p>
        Conteúdo utilizado com permissão do autor. Qualquer direito sobre o
        material pertence ao autor original.
      </p>
    </Modal>
  );
};
