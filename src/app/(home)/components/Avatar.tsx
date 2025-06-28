import React from "react";
import { Link, Avatar as Picture } from "@radix-ui/themes";

const Avatar = () => {
  return (
    <Link
      className=""
      href="https://x.com/intent/follow?screen_name=Anchalj04"
      target="_blank"
    >
      <Picture src="/dp.png" fallback="A" size="9" radius="full" />
    </Link>
  );
};

export default Avatar;
