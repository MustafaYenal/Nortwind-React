import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://media-exp1.licdn.com/dms/image/C4D35AQGSAF8Wb3j8cA/profile-framedphoto-shrink_400_400/0/1617570897507?e=1666771200&v=beta&t=zWPd9xXdaJbiP1RmTwizSkkY2I6Oxhuj3kTTsxr-Pp0"
        />
        <Dropdown pointing="top left" text="Yenal">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
