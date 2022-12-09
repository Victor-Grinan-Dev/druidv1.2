import ajax from "./ajax";
import events from "events";

const emitter = new events.EventEmitter();

export const ajaxPost = async (endPoint, node) => {
    try{
        const axios = await ajax();
        const response = await axios.post(endPoint, node);
        console.log("Node created: ", response.data);
        emitter.emit("NODE_UPDATED");
      } catch (e) {
        alert(e);
      }
}

export const ajaxGet = async (endPoint) => {
    try {
        const axios = await ajax();
        const response = await axios.get(endPoint);
        if (response.data){
            return response.data;
        }
      } catch (e) {
        alert(e);
      }
}