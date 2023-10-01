"use client"; // because of the react-data-table-component lib
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import DataTable, { TableColumn } from "react-data-table-component";
import { useState } from "react";
import { Button } from "../../components/Button";
import { Formik } from "formik";
import { FormInput } from "../../components/Form/FormInput";
import { CloseLg, LeafWithBorder } from "../../components/Icons";

/**
 * Props for `Table`.
 */
export type TableProps = SliceComponentProps<Content.TableSlice>;

type Row = {
  id: number;
  company: string;
  status: JSX.Element;
};
/**
 * Component for "Table" Slices.
 */
export const Table = ({ slice }: TableProps): JSX.Element => {
  const dummyData = [
    {
      id: 12412454,
      company: "F&S Fitness & Training ",
      status: <CloseLg className={"text-red-600 m-2"} />,
    },
    {
      id: 48268574,
      company: "F&S Fitness & Training Company",
      status: <LeafWithBorder className={"text-green-400"} />,
    },
    {
      id: 43634634,
      company: "F&S Fitness & Training Company",
      status: <CloseLg className={"text-red-600 m-2"} />,
    },
    {
      id: 36334564,
      company: "F&S Fitness & Training Company",
      status: <LeafWithBorder className={"text-green-400"} />,
    },
    {
      id: 43534545,
      company: "F&S Fitness & Training Company",
      status: <LeafWithBorder className={"text-green-400"} />,
    },
    {
      id: 35464576,
      company: "F&S Fitness & Training Company",
      status: <LeafWithBorder className={"text-green-400"} />,
    },
    {
      id: 34653457,
      company: "F&S Fitness & Training Company",
      status: <LeafWithBorder className={"text-green-400"} />,
    },
    {
      id: 34534338,
      company: "F&S Fitness & Training Company",
      status: <LeafWithBorder className={"text-green-400"} />,
    },
    {
      id: 93252355,
      company: "F&S Fitness & Training Company",
      status: <LeafWithBorder className={"text-green-400"} />,
    },
    {
      id: 324234,
      company: "F&S Fitness & Training Company",
      status: <CloseLg className={"text-red-600 m-2"} />,
    },
    {
      id: 1314441,
      company: "F&S Fitness & Training Company",
      status: <LeafWithBorder className={"text-green-400"} />,
    },
    {
      id: 12412454,
      company: "F&S Fitness & Training ",
      status: <CloseLg className={"text-red-600 m-2"} />,
    },
    {
      id: 48268574,
      company: "F&S Fitness & Training Company",
      status: <LeafWithBorder className={"text-green-400"} />,
    },
    {
      id: 43634634,
      company: "F&S Fitness & Training Company",
      status: <LeafWithBorder className={"text-green-400"} />,
    },
    {
      id: 36334564,
      company: "F&S Fitness & Training Company",
      status: <LeafWithBorder className={"text-green-400"} />,
    },
    {
      id: 43534545,
      company: "F&S Fitness & Training Company",
      status: <LeafWithBorder className={"text-green-400"} />,
    },
    {
      id: 35464576,
      company: "F&S Fitness & Training Company",
      status: <CloseLg className={"text-red-600"} />,
    },
    {
      id: 34653457,
      company: "F&S Fitness & Training Company",
      status: <CloseLg className={"text-red-600"} />,
    },
    {
      id: 34534338,
      company: "F&S Fitness & Training Company",
      status: <CloseLg className={"text-red-600"} />,
    },
    {
      id: 93252355,
      company: "F&S Fitness & Training Company",
      status: <LeafWithBorder className={"text-green-400"} />,
    },
    {
      id: 324234,
      company: "F&S Fitness & Training Company",
      status: <LeafWithBorder className={"text-green-400"} />,
    },
    {
      id: 1314441,
      company: "F&S Fitness & Training Company",
      status: <CloseLg className={"text-red-600 m-2"} />,
    },
  ];

  const columns: TableColumn<Row>[] = slice.items.map(
    ({ column_name, column_id }) => ({
      name: column_name,
      selector: (row: Row) => row[column_id],
      grow: (() => {
        if (column_id === "status") return 0.4;
        if (column_id === "company") return 3;
        if (column_id === "status") return 0.2;
        return 1;
      })(),
    }),
  );

  const [data, setData] = useState(dummyData);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={"pc py-20"}
    >
      <div className={"flex flex-row justify-end pb-8 gap-2"}>
        <Formik
          initialValues={{ searchTerm: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <>
            <FormInput
              name="searchTerm"
              placeholder={slice.primary.search_field_placeholder}
            />
            <Button type="submit" text={slice.primary.search_button_text} />
          </>
        </Formik>
      </div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        className="dataTable_wrapper"
      />
    </section>
  );
};

export default Table;
