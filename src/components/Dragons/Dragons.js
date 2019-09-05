import React from "react";
import DragonList from "../DragonList/DragonList";
import DragonDetail from "../DragonDetail/DragonDetail";

const Dragons = () => {
  const [isDetailOpen, setDetailOpen] = React.useState(false);
  const dragons = [{"id":"28","createdAt":"2019-09-01T09:52:37.949Z","name":"Nefestus","type":"Fire","histories":[],"history":"odskaodkosakdo"},{"id":"30","createdAt":"2019-09-01T22:08:37.956Z","name":"dragon lendary","type":"Fogo","histories":[],"history":"História"},{"id":"39","createdAt":"2019-09-01T05:21:38.728Z","name":"Sand Dragon","type":"white","histories":"História"},{"id":"47","createdAt":"2019-09-02T02:56:11.981Z","name":"Luna","type":"Fairy","histories":[],"history":"sdasdasdasdas"},{"id":"48","createdAt":"2019-09-02T14:05:48.207Z","name":"Nemu","type":"Water","histories":[],"history":"This dragon is born on the fire...."},{"id":"49","createdAt":"2019-09-04T08:49:21.965Z","name":"Libby","type":"silver","histories":[]},{"id":"50","createdAt":"2019-09-04T10:09:38.040Z","name":"Blake","type":"violet2","histories":[]},{"id":"51","createdAt":"Wed Sep 04 2019 22:49:21 GMT-0300 (Horário Padrão de Brasília)","name":"dragon ball ","type":"super","histories":[]},{"id":"52","createdAt":"Wed Sep 04 2019 22:51:25 GMT-0300 (Horário Padrão de Brasília)","name":"aluhu","type":"akbar","histories":[]},{"id":"53","createdAt":"Wed Sep 04 2019 22:56:00 GMT-0300 (Horário Padrão de Brasília)","name":"Barbeiro3","type":"mash","histories":[]},{"id":"54","createdAt":"Wed Sep 04 2019 22:56:46 GMT-0300 (Horário Padrão de Brasília)","name":"Kanildo","type":"bladhks","histories":[]},{"id":"55","createdAt":"Wed Sep 04 2019 23:03:30 GMT-0300 (Horário Padrão de Brasília)","name":"Android","type":"lolipop","histories":[]},{"id":"56","createdAt":"Wed Sep 04 2019 23:07:17 GMT-0300 (Horário Padrão de Brasília)","name":"Aqui está","type":"outro te","histories":[]},{"id":"57","createdAt":"Wed Sep 04 2019 23:14:01 GMT-0300 (Horário Padrão de Brasília)","name":"ate","type":"dfdf","histories":[]},{"id":"58","createdAt":"Wed Sep 04 2019 23:14:57 GMT-0300 (Horário Padrão de Brasília)","name":"aa","type":"ssas","histories":[]},{"id":"59","createdAt":"Wed Sep 04 2019 23:17:40 GMT-0300 (Horário Padrão de Brasília)","name":"AAAAA","type":"SDDSDSSD","histories":[]},{"id":"60","createdAt":"Wed Sep 04 2019 23:19:44 GMT-0300 (Horário Padrão de Brasília)","name":"Lol","type":"loli","histories":[]},{"id":"61","createdAt":"Wed Sep 04 2019 23:23:03 GMT-0300 (Horário Padrão de Brasília)","name":"BBB","type":"SSSDSD","histories":[]},{"id":"62","createdAt":"Wed Sep 04 2019 23:23:35 GMT-0300 (Horário Padrão de Brasília)","name":"ASASA","type":"ASDSDS","histories":[]},{"id":"63","createdAt":"Wed Sep 04 2019 23:31:05 GMT-0300 (Horário Padrão de Brasília)","name":"dragon","type":"ball z","histories":[]}];

  const handleIsDetailOpen = (isOpen) => {
    setDetailOpen(isOpen);
  }

  return (
    <div>
        <h1>Dragons</h1>
         <DragonList></DragonList>
      <DragonDetail isOpen={isDetailOpen} closeModal={() => { handleIsDetailOpen(false) }} dragon={{name: "Dragon1", type:"Loard", creationDate:"30/02/0002"}}></DragonDetail>
      <button onClick={() => { handleIsDetailOpen(true) }}>Open</button>
    </div>
  );
}

export default Dragons;