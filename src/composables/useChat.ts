import { sleep } from "@/helpers/sleep";
import type { ChatMessage } from "@/interfaces/chatMessageInterface";
import type { AnswerYesNo } from "@/interfaces/Yes-No-Response";
import { ref } from "vue";

export const useChat = () =>{
    const isTyping =ref(false);
    const messages =ref<ChatMessage[]>([]);



        const gerHerResponse = async () =>{

            const resp = await fetch('https://yesno.wtf/api');
            const data = (await resp.json()) as AnswerYesNo;
            return data
           
        }


      
      const onMessage = async (text:string)=>{

        if(text.length===0)return;        

        messages.value.push({
          id: new Date().getTime(),
          message: text,
          itsMine:true
        });
        //evaluar si termina en signo de interrogacion

        if(!text.endsWith('?')) return;
        isTyping.value = true;
        await sleep(1);
        isTyping.value = false;
        const {answer,image} = await gerHerResponse();
        messages.value.push({
            id: new Date().getTime(),
            message: answer,
            itsMine:false,
            image:image
          });
      }



      return {

        //properties
        messages,
        isTyping,
        //methods
        onMessage,
        gerHerResponse
      }


}