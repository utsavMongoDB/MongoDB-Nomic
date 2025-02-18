import { StreamingTextResponse, LangChainStream, Message } from 'ai';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { BedrockChat } from '@langchain/community/chat_models/bedrock';

import { ConversationalRetrievalQAChain } from 'langchain/chains';
import { vectorStore } from '@/utils/mongodb';
import { NextResponse } from 'next/server';
import { BufferMemory } from "langchain/memory";

export async function POST(req: Request) {
    try {
        const { stream, handlers } = LangChainStream();
        const body = await req.json();
        const messages: Message[] = body.messages ?? [];
        const question = messages[messages.length - 1].content;
        
        const model = new BedrockChat({
            model: "anthropic.claude-3-sonnet-20240229-v1:0",
            region: process.env.BEDROCK_AWS_REGION,
            credentials: {
                accessKeyId: process.env.BEDROCK_AWS_ACCESS_KEY_ID!,
                secretAccessKey: process.env.BEDROCK_AWS_SECRET_ACCESS_KEY!,
            },
            streaming: true
        });
        
        // console.log(await model.invoke("Tell me a joke"));
        const retriever = vectorStore().asRetriever({ 
            "searchType": "similarity", 
            // "searchKwargs": { "fetchK": 10, "lambda": 0.25 } 
        });
        // console.log("retriever", retriever);
        const conversationChain = ConversationalRetrievalQAChain.fromLLM(model, retriever, {
            memory: new BufferMemory({
              memoryKey: "chat_history",
            }),
        });
        // console.log("conversationChain", conversationChain);
        // console.log("question", question);
        conversationChain.invoke({
            "question": question
        });
        console.log("Stream", stream)
        //   const res = await model.invoke("Tell me a joke");
        //   console.log(res);
        return new StreamingTextResponse(stream);
    }
    catch (e) {
        console.log("Error Processing", e);
        return NextResponse.json({ message: 'Error Processing' }, { status: 500 });
    }
}

// export async function POST(req: Request) {
//     try {
//         const { stream, handlers } = LangChainStream();
//         const body = await req.json();
//         console.log(body);
//         const messages: Message[] = body.messages ?? [];
//         const question = messages[messages.length - 1].content;

//         const model = new ChatOpenAI({
//             temperature: 0.8,
//             streaming: true,
//             callbacks: [handlers],
//         });

//         const retriever = vectorStore().asRetriever({ 
//             "searchType": "mmr", 
//             "searchKwargs": { "fetchK": 10, "lambda": 0.25 } 
//         });
//         const conversationChain = ConversationalRetrievalQAChain.fromLLM(model, retriever, {
//             memory: new BufferMemory({
//               memoryKey: "chat_history",
//             }),
//         });
//         console.log("question", question);
//         conversationChain.invoke({
//             "question": question
//         });
//         console.log("Stream", stream)
//         return new StreamingTextResponse(stream);
//     }
//     catch (e) {
//         console.log("Error Processing", e);
//         return NextResponse.json({ message: 'Error Processing' }, { status: 500 });
//     }
// }