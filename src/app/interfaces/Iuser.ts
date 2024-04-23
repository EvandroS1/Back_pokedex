import { Timestamp } from "typeorm";

interface Iuser {
  id?: string;
  name: string;
  password: string
  email: string;
  sexo?: boolean;
  celphone?: string;
  created_at?: Date;

}
export default Iuser;