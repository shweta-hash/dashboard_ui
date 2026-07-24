import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "../ui/table";

const candidates = [
  {
    id: 1,
    name: "Tiger Nixon",
    position: "System Architect",
    status: "Active",
    age: 61,
    startDate: "2011/04/25",
    salary: "$320,800",
  },
  {
    id: 2,
    name: "Garrett Winters",
    position: "Accountant",
    status: "Active",
    age: 63,
    startDate: "2011/07/25",
    salary: "$170,750",
  },
  {
    id: 3,
    name: "Ashton Cox",
    position: "Junior Technical Author",
    status: "Active",
    age: 66,
    startDate: "2009/01/12",
    salary: "$86,000",
  },
  {
    id: 4,
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    status: "Inactive",
    age: 22,
    startDate: "2012/03/29",
    salary: "$433,060",
  },
  {
    id: 5,
    name: "Airi Satao",
    position: "Accountant",
    status: "Active",
    age: 33,
    startDate: "2008/11/27",
    salary: "$433,060",
  },
  {
    id: 6,
    name: "Brielle willianSon",
    position: "Integration Specialist",
    status: "Active",
    age: 61,
    startDate: "2012/12/02",
    salary: "$433,060",
  },
];

export default function CandidateTable({}) {
  return (
    <Card className="shadow-sm rounded-lg w-210">
      <CardHeader className="pb-0">
        <CardTitle className="text-lg font-semibold">Recent Candidates</CardTitle>
      </CardHeader>
      <CardContent className="py-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold text-gray-700">Name</TableHead>
              <TableHead className="font-semibold text-gray-700">Position</TableHead>
              <TableHead className="font-semibold text-gray-700">Table</TableHead>
              <TableHead className="font-semibold text-gray-700">Age</TableHead>
              <TableHead className="font-semibold text-gray-700">Start Date</TableHead>
              <TableHead className="font-semibold text-gray-700">Salary</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {candidates.map((candidate) => (
              <TableRow className="hover:bg-gray-50" key={candidate.id}>

                <TableCell className="font-medium">{candidate.name}</TableCell>

                <TableCell className="font-medium">{candidate.position}</TableCell>

                <TableCell className="font-medium">
                  <Badge className={
                    candidate.status==="Active"
                    ? "bg-green-100 text-green-700 hover:bg-green-100" 
                    : "bg-red-100 text-red-700 hover:bg-red-100"
                  }>
                      {candidate.status}
                  </Badge>
                </TableCell>

                <TableCell className="font-medium">{candidate.age}</TableCell>

                <TableCell className="font-medium">{candidate.startDate}</TableCell>

                <TableCell className="font-medium">{candidate.salary}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
