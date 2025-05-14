import { useContext, useEffect, useState } from "react";
import type { TableColumnsType } from "antd";
import { Table } from "antd";
import { AdminApi } from "@api";
import { formatDateByTimestamp } from "@utils";
import { TopBar } from "@components";
import { StudentContext } from "@context";
import "./styles.scss";

interface DataType {
  key: React.Key;
  id: number;
  code: string;
  name: string;
}

const columns: TableColumnsType<DataType> = [
  { title: "Matrícula", dataIndex: "code", key: "code" },
  { title: "Nome", dataIndex: "name", key: "name" },
  {
    title: "Último registro de estudo",
    dataIndex: "study_timestamp",
    key: "study_timestamp",
    render: (s) => (
      <span style={{ color: "#000000" }}>
        {s ? formatDateByTimestamp(Number(s)) : "---"}
      </span>
    ),
  },
  {
    title: "",
    key: "operation",
    render: (s) => <a href={`/admin/studentDetails/${s.code}`}>Detalhes</a>,
  },
];

export default () => {
  const { student } = useContext(StudentContext);
  const [students, setStudents] = useState<any>([]);

  useEffect(() => {
    AdminApi.getStudentsData(student?.code as string).then((res) => {
      setStudents(res.filter((s: any) => !s.admin));
    });
  }, []);

  return (
    <main className="admin-home-container">
      <TopBar title={`Bem vindo, ${student?.name.split(" ", 2)[0]}`} />
      <div className="table-container">
        <Table<DataType> columns={columns} dataSource={students} />
      </div>
    </main>
  );
};
