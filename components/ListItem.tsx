"use client";

import { useRouter } from "next/navigation";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem = ({ image, name, href }: ListItemProps) => {
  const router = useRouter();

  const onClick = () => {
    //add authentification before push
    router.push(href);
  };
  return <div>ListItem</div>;
};

export default ListItem;
