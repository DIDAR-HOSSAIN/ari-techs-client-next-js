import type { MenuProps } from "antd";
import { USER_ROLE } from "./role";
import Link from "next/link";


const navbarIitems = (role: string) => {
  const superAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-student`}>Manage Students</Link>,
      key: `/${role}/manage-student`,
    },
    {
      label: <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
      key: `/${role}/manage-faculty`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
};

export default navbarIitems;