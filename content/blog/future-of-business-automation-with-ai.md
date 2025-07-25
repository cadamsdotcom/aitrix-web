---
title: "The Future of Business Automation With AI"
description: "Explore five major changes reshaping business automation with AI, from client-facing applications to browser automation and no-code platforms."
image: "/images/blog-future-of-business-automation.png"
date: 2025-05-16T12:00:00Z
draft: false
---

AI is a fast moving field. As the capabilities of models and AI systems improve, we foresee five major trends to keep an eye on.

## 1. Changing From Internal-Only to Client-Facing AI

Early language models hallucinated. In one notable case, lawyers for firm [Morgan & Morgan](https://www.forthepeople.com) were [sanctioned](https://www.clio.com/blog/ai-hallucination-case) after filing court documents citing non-existent cases generated by AI tools.

Business AI tooling today is mostly decision support: helping human experts make decisions they were in charge of already. For example, AI may assist in reading X-rays but will not directly interact with patients. Or AI that helps customer support staff but does not itself respond.

All this will change in the near future. People are becoming comfortable with the limitations and nature of AI models and the models themselves get better all the time. People are becoming savvy enough to understand where they can and can't trust AI, even while [AI is becoming trustable in more ways](https://simonwillison.net/2025/Apr/21/ai-assisted-search).

We are reaching a [tipping point](<https://en.wikipedia.org/wiki/Tipping_point_(sociology)>) where AI will become acceptable to provide directly to clients. For instance you can imagine a legal chatbot that, with the right disclaimers, lets clients chat with their case documents to their hearts' content. This saves you time on the phone and in your email.

The old guard will decry this as heresy. To anyone challenged by this premise - consider Wikipedia! How unlikely for strangers to collaboratively build a quality encyclopedia. Yet a [2005 Nature test](https://www.theguardian.com/technology/blog/2005/dec/14/wikipedianowo) showed Wikipedia's science entries nearly matched Britannica's accuracy. Wikipedia swept away what came before and went on to become one of the most trusted sources on the Internet and a primary source for answers from LLMs.

It is not just a case of handing off a chatbot to clients. To de-risk customer-facing AI you should either have responses be vetted before being sent (eg. in the case of a customer service bot that composes replies) or review sent responses - or a sample of them - post facto. Which of these is appropriate, and whether the reviews are automated, depends on the risk profile of what the AI will be saying to customers.

No AI should take irreversible action without human involvement. In February 2024, Air Canada was held liable (https://www.bbc.com/travel/article/20240222-air-canada-chatbot-misinformation-what-travellers-should-know) for its chatbot giving $1 airfares. Actions like issuing discounts, refunds, or even publishing online content should be checked first. The approver should be responsible for the decision. This is because AI cannot be held accountable or fired for mistakes. It loses nothing by messing up, so has no incentive to behave in line with policies.

Recommendation: Look closely at the customer-facing activities your business does and consider which are automatable. Try searching YouTube for videos discussing automation of each. Consider carefully what level of approval, vetting, and/or review to use. When it comes to mechanisms for approval/vetting/review, research online what peers are doing.

Example: Are support staff providing long explanations to customers? This can be reduced with automation: an AI, augmented with your knowledge base & anonymized ticket history, can compose draft replies for staff to review, edit, and send.

## 2. Increasing autonomy in base models

Base models are gaining capabilities all the time. Providers will keep adding more as they mature their offerings. For example, Anthropic's Claude macOS app - paired with [Desktop Commander MCP](https://github.com/wonderwhy-er/DesktopCommanderMCP) - will edit files on your computer, write code or documents, and run software - all in response to your prompts.

As models become more capable and can operate for longer without intervention, you can move from using AI for task-level efficiency to a delegation style of working: "Do this, show your work, and stop when you're done."

You still need to know what the tasks entail in great detail and have guardrails to keep the AI on track. For now, automation is usually implemented by an AI engineer or consultant. Future models and tools will be easier to use, so non-experts can describe tasks on their own.

Future models will use more advanced tools in more trustworthy ways. One very important example that is on the horizon is web browser automation and computer use. That is, the ability for a model to use a web browser or any other app on your computer - just as capably as you or I. The set of actions needed is small: examine the screen, point, click, drag, type, press enter, etc. The most prominent tool is OpenAI's Operator (https://openai.com/index/introducing-operator) - which currently requires a $200/month subscription and tends to go off the rails (https://every.to/chain-of-thought/we-tried-openai-s-new-agent-here-s-what-we-found). The up-and-coming alternative is Claude's Computer Use (link to the blog post) demo (link to the code) which sadly never made it past a proof of concept.

It's not here yet, but in the future, such automation will let an AI model to do anything you can do in a browser based on some instructions. Give it your tedious point-and-click tasks and watch it work - or let it run and review the screenshots and output later.

Recommendations:
Try automation tasks in plain ChatGPT. Try them in Claude with appropriate MCPs. See how far they can get! Where they stop, ask the AIs for ideas that could take them further.

Controlling a web browser is going to be a huge unlock - but unfortunately in April 2025 it's not there yet. Keep an eye out for browser automation tools and the models that use them to become more common.

## 3. The rise of no-code automation platforms ([make.com](https://make.com), [n8n](https://n8n.com), [Zapier](https://zapier.com))

At the dawn of AI, building agentic systems required code-first tools like LangChain. Now thanks to AI integration, platforms like make.com, n8n, and Zapier are connected to everything and can invoke LLMs inside workflows.

In essence each no-code automation platform lets you build a flowchart of operations, where each step calls out to a different system. Maybe there will be an initiator that responds to incoming emails, then saves something to a spreadsheet and sends you a ping that you have a new line item to inspect. In the middle could be a request to have an AI categorize the item and decide its priority.

These platforms connect to almost every online tool out there. When it comes to what you can automate, your imagination is the limit. YouTube has a wide array of content from creators doing almost everything possible - and each platform has an AI to chat to, that builds what you need in reponse to prompts like "make it send me an email when it's done".

Recommendation: next time you have something to automate, try one of these tools. Only learn what you need as you go and use AI everywhere. When you're confused, go to YouTube or ChatGPT (or your favorite AI) for help.

## 4. The rise of prompt-to-website platforms ([Bolt](https://bolt.new), [v0](https://v0.dev), [Lovable](https://lovable.dev), [Manus](https://manus.im))

These tools build a website or a web app from a few sentences. For very little effort you get a great starting point - just add content in the case of a website, or functionality in the case of a web app. It's amazing what can be built now: for example, a [full Software-as-a-Service app](https://youtube.com/watch?v=-NxObRv7md0).

They act on instructions and keep going in the face of challenges, and stop and ask for clarification if there is a question will become more important. But they are not autonomous - they need to be guided, so you need to know what you're looking for.

Over time each tool will go further without stopping. They'll have better judgment - for example better design sense - and be better at asking for help.

Right now you're best off asking the tool to produce a project plan and/or TODO list and clarify any questions it has have with you before they get started. That way you'll find the tool goes further while better sticking to what you want.

Recommendation: next time you have a website to build, try each tool on a brand-new account.
Use the initial free credits. The results from each will vary. You will like some stuff and hate other stuff. Pick your favorite (for example you might really like what Lovable built) then ask for additions until everything you like from the others is included - one website to rule them all.

## 5. The rise of YouTube as a powerful online resource

Many creators are creating content about the latest developments in AI - myself included! Everything you might want to do can be found on someone's YouTube channel if it's possible. For everything else just try typing the query into ChatGPT, Claude, DeepSeek, or your favorite AI tool.

There's so much content out there - try typing "email automation" into YouTube and see what you get. People are creating content about [make.com](https://www.youtube.com/results?search_query=make), [n8n](https://www.youtube.com/results?search_query=n8n), [Lovable](https://www.youtube.com/results?search_query=lovable), [OpenAI Operator](https://www.youtube.com/results?search_query=operator), and everything else.

Recommendation: The Internet is brimming with creativity. When you dream up something AI might do, search online in case someone already made an explainer for it. If you don't find anything, start a conversation with an AI. That might lead you to, for example, break down your idea into sub-ideas. Explainers might exist for parts of what you need.

# Conclusion

Technology lets fewer people do more work. By creatively putting it to use you can do more than your competition - and with fewer people! Things are changing fast too, so it's crucial to understand what AI can do now and what it's getting better at.

1. AI is getting better at not hallucinating and thus more trustworthy to deploy in customer facing roles. The AI's output should be vetted and/or reviewed. Irreversible actions must still be vetted before being taken.

2. Base models are getting more capable, breaking out of the "chat box" and gaining new capabilities such as image generation and voice chat. Browser use is not far behind.

3. No-code automation platforms are on the rise, and have their own built-in AIs that can help you get what you need.

4. Prompt-to-website tools are getting better all the time. Each can build a great website ready for use on the Internet. Plus if you wish it can be a starting point for something greater.

5. There have never been more resources online about the tools at your disposal. Go for it and start building!

If you're looking for help bringing your ideas to life, [Contact Us](/contact) and book a strategy call!
