"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot } from "lucide-react";

export default function ChatbotSection() {
  // Replace YOUR_CHATBOT_ID with your actual Chatbase (or other provider) chatbot ID
  const chatbotEmbedURL = "https://www.chatbase.co/chatbot-iframe/YOUR_CHATBOT_ID_PLACEHOLDER";

  return (
    <section id="chatbot" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Bot className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            Ask Nodebrew AI
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Have questions about Nodebrew? Our chatbot is here to help answer common queries!
          </p>
        </div>
        <Card className="max-w-3xl mx-auto shadow-xl overflow-hidden">
          <CardHeader>
            <CardTitle>Nodebrew Chat Assistant</CardTitle>
            <CardDescription>
              Type your questions below to get instant answers about our community, events, and more.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="aspect-video md:aspect-[16/10] w-full bg-muted">
              <iframe
                src={chatbotEmbedURL}
                width="100%"
                className="w-full h-full min-h-[400px] md:min-h-[500px]"
                frameBorder="0"
                title="Nodebrew AI Chatbot"
              ></iframe>
            </div>
          </CardContent>
        </Card>
         <p className="mt-8 text-center text-sm text-muted-foreground">
            Please replace `YOUR_CHATBOT_ID_PLACEHOLDER` in the component with your actual Chatbase ID to activate the chatbot.
          </p>
      </div>
    </section>
  );
}
