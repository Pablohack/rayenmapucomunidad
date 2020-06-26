import React from "react";
import InstagramEmbed from "react-instagram-embed";
import { Grid } from "@material-ui/core";

export default function ActivityImage() {
  const styles = {
    margin: "30px",
  };
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <div style={styles}>
        <InstagramEmbed
          url="https://www.instagram.com/p/CB4JX6kheUM/"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
        />
      </div>
      <div style={styles}>
        <InstagramEmbed
          url="https://www.instagram.com/p/CB4j1e3hk6c/"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
        />
      </div>
      <div style={styles}>
        <InstagramEmbed
          url="https://www.instagram.com/p/CB4jp7phhpH/"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
        />
      </div>
      <div style={styles}>
        <InstagramEmbed
          url="https://www.instagram.com/p/CB4jM4xh1-p/"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
        />
      </div>
      <div style={styles}>
        <InstagramEmbed
          url="https://www.instagram.com/p/CB4i-tchoCo/"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
        />
      </div>
      <div style={styles}>
        <InstagramEmbed
          url="https://www.instagram.com/p/CB4gm1EhMBH/"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
        />
      </div>
      <div style={styles}>
        <InstagramEmbed
          url="https://www.instagram.com/p/CB4gK-2Bq_h/"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
        />
      </div>
      <div style={styles}>
        <InstagramEmbed
          url="https://www.instagram.com/p/CB4f0DtBDaL/"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
        />
      </div>
    </Grid>
  );
}
