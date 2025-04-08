function showYears(subject) {
    const yearList = document.getElementById("year-list");
    const yearsContainer = document.getElementById("years-container");
    const subjectTitle = document.getElementById("subject-title");
  
    const subjects = {
      math: "Engineering Math",
      physics: "Engineering Physics",
      chemistry: "Engineering Chemistry"
    };
  
    subjectTitle.textContent = `${subjects[subject]} - Previous Year Papers`;
  
    yearsContainer.innerHTML = "";
  
    for (let year = 2013; year <= 2025; year++) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `assets/questions/${subject}/${year}.pdf`;
      a.textContent = `${year}`;
      a.target = "_blank";
      li.appendChild(a);
      yearsContainer.appendChild(li);
    }
  
    yearList.classList.remove("hidden");
  }
  