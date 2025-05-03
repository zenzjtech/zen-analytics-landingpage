import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// FAQ item interface
interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  // FAQ data
  const faqItems: FAQItem[] = [
    {
      question: 'Is Zen Analytics free to use?',
      answer: 'Yes, Zen Analytics is completely free to use for all basic analytics features. We also offer a premium version with advanced features for power users.'
    },
    {
      question: 'Does Zen Analytics work on all websites?',
      answer: 'Zen Analytics works on any website that uses at least one of our supported analytics platforms. We currently support 25+ major analytics platforms including Google Analytics, Facebook Pixel, Adobe Analytics, and more.'
    },
    {
      question: 'Does Zen Analytics collect my data?',
      answer: 'Privacy is our top priority. Zen Analytics does not collect or store any of your analytics data. All processing happens locally in your browser, and your data never leaves your device.'
    },
    {
      question: 'How accurate are the analytics calculations?',
      answer: 'Zen Analytics provides the same level of accuracy as the original analytics platforms. We simply aggregate and visualize the data that already exists on the page, without modifying any metrics.'
    },
    {
      question: 'Will this extension slow down my browser?',
      answer: 'No, Zen Analytics is designed to be lightweight and efficient. It runs in the background and only activates when you visit a page with analytics data. The impact on browser performance is minimal.'
    },
    {
      question: 'I found a bug or have a feature request. How can I report it?',
      answer: 'We appreciate your feedback! Please use the support form available in the extension settings, or contact us directly through our website. We actively review all bug reports and feature requests.'
    }
  ];

  return (
    <Box
      id="faq"
      sx={{
        py: 8,
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            component="h2"
            variant="h3"
            color="text.primary"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            Have questions about Zen Analytics? Find answers to common questions below.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                mb: 2,
                boxShadow: 'none',
                '&:before': { display: 'none' },
                border: 1,
                borderColor: 'divider',
                borderRadius: '8px !important',
                overflow: 'hidden',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  '&.Mui-expanded': {
                    minHeight: 48,
                  },
                }}
              >
                <Typography variant="subtitle1" fontWeight={500}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary">
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
