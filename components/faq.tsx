import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "How many players do I need?",
      answer:
        "The imposter game works best with 4-10 players. With fewer than 4 players, it becomes too easy to identify the imposter. With more than 10 players, rounds can become too long.",
    },
    {
      question: "Do I need to download anything?",
      answer:
        "No! Our imposter game generator is completely free and unblocked. This online imposter game works entirely in your web browser. No downloads, no installations, and no sign-up required. Just visit the website and start playing the word imposter game now.",
    },
    {
      question: "Can I play with custom words?",
      answer:
        "Yes! While our random word generator provides thousands of pre-generated imposter words across multiple categories, you can also create custom word lists for personalized gameplay.",
    },
    {
      question: "Is the game suitable for children?",
      answer:
        "We offer a Family Friendly mode with age-appropriate words. The game is great for developing critical thinking and social skills in children.",
    },
    {
      question: "How long does a typical game last?",
      answer:
        "A typical round lasts 10-15 minutes, depending on the number of players and how much discussion time you allow. You can adjust the pace to fit your group.",
    },
    {
      question: "Can I play this online imposter game with remote friends?",
      answer:
        "Yes! While our imposter game generator is designed for local pass-and-play, you can use it with video calling apps like Zoom or Discord to play this word imposter game online with remote friends. It's a free and unblocked way to enjoy party games together.",
    },
    {
      question: "What makes this the best imposter game generator?",
      answer:
        "Our free imposter game generator combines a powerful random word generator with an intuitive interface. Play imposter word games online instantly, guess the imposter with friends, and enjoy unlimited gameplay. It's unblocked, requires no downloads, and works on all devices. Perfect for parties, family gatherings, or online hangouts!",
    },
  ]

  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Imposter Game Generator FAQ</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Everything you need to know about playing the online imposter game and using our word generator.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
