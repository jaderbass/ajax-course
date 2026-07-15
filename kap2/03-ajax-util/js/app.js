// Nutzung der Hilfsfunktion
// Trennung von Infrastruktur und Logik

document.querySelector("#btnLoad").addEventListener("click", _ => {
  ajaxGet("server/data.json", (response, status) => {
    const data = JSON.parse(response);
    // document.querySelector("#output").textContent = JSON.stringify(data, null, 2);

    /* * Übung * */
    const description = document.querySelector(".description");
    description.classList.add("day");
    
    // Überschrifts-Element anlegen und Inhaltstext hinzufügen
    const heading = document.createElement("h2");
    heading.textContent = data.course;

    // Absatzelement anlegen und Klassen-Attribut hinzufügen
    const courseDay = document.createElement("p");
    const courseAttr = document.createAttribute("class");
    courseAttr.value = "hint";

    // Attributknoten erzeugen
    courseDay.setAttributeNode(courseAttr);
    courseDay.textContent = `Tag ${data.day}`;

    const topic = document.createElement("h3");
    const topicAttr = document.createAttribute("class");
    topicAttr.value = "subtitle";
    topic.textContent = data.topic;

    // Listen-Element anlegen
    const ul = document.createElement("ul");
    // Items-Array speichern
    const items = data.items;
    // Schleife über das Items-Array
    items.forEach(item => {
      // List-Item-Element anlegen
      const li = document.createElement("li");
      // Text hinzugefügt
      li.textContent = item.title;
      // List-Item-Element als Kind-Element an die Liste angefügt
      ul.appendChild(li);
    });

    description.appendChild(heading);
    description.appendChild(courseDay);
    description.appendChild(topic);
    description.appendChild(ul);
    
  });
});