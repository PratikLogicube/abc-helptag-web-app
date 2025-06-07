interface AuthCredentials {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phoneNumber: string;
}

declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module "*.svg?url" {
  const content: any;
  export default content;
}
