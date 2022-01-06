import React from "react";
import { FootnoteLink } from "@tds/core-terms-and-conditions";
import Card from "@tds/core-card";
import Heading from "@tds/core-heading";
import Paragraph from "@tds/core-paragraph";
import Text from "@tds/core-text";
import Box from '@tds/core-box'

export default function Footnote(props) {
  return (
    <div>
      <Card variant="defaultWithBorder">
        <Box between={3}>
          <Heading level="h4">Disclaimer:</Heading>

          <Paragraph>
            The TELUS team acknowledges that our work spans many Territories and
            Treaty areas and we are grateful for the traditional Knowledge
            Keepers and Elders who are with us today, those who have gone before
            us and the youth that inspire us. We recognize the land and the
            benefits it provides all of us, as an act of Reconciliation, as
            recommended by the Truth and Reconciliation Commission’s (TRC) 94
            Calls to Action and gratitude to those whose territory we reside on,
            work on or are visiting. Learn more about TELUS’ commitments to
            Reconciliation.
          </Paragraph>

          <Paragraph>
            <Text>To learn more about Telus and our products, click here.</Text>
          </Paragraph>
        </Box>
      </Card>
    </div>
  );
}
