// Nutzung der Hilfsfunktion
// Trennung von Infrastruktur und Logik

document.querySelector("#btnLoad").addEventListener("click", _ => {
  ajaxGet("server/data.json", (response, status) => {
    const data = JSON.parse(response);
    // document.querySelector("#output").textContent = JSON.stringify(data, null, 2);

    /* * Übung * */
    const description = document.querySelector(".description");
    description.classList.add("day");
    
    const heading = document.createElement("h2");
    heading.textContent = data.course;
    const courseDay = document.createElement("p");
    const courseAttr = document.createAttribute("class");
    courseAttr.value = "hint";
    courseDay.setAttributeNode(courseAttr);
    courseDay.textContent = `Tag ${data.day}`;
    const topic = document.createElement("h3");
    const topicAttr = document.createAttribute("class");
    topicAttr.value = "subtitle";
    topic.textContent = data.topic;
    const ul = document.createElement("ul");
    const items = data.items;
    items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.title;
      ul.appendChild(li);
    });

    description.appendChild(heading);
    description.appendChild(courseDay);
    description.appendChild(topic);
    description.appendChild(ul);
    
  });
});