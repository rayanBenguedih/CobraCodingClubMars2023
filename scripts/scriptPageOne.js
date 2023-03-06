function toggleSection(sectionId) {

    // Récupère tout les éléments qui sont une "section" et qui ont un ID
    var allSections = document.querySelectorAll("section[id]");
    for (var i = 0; i < allSections.length; i++) {
      var section = allSections[i];
      if (section.id === sectionId) {
        continue;
      }
      section.classList.remove("active");
    }
  
    // active/désactive la visibilité des éléments, les passant à leur version "open" dans le css
    var section = document.getElementById(sectionId);
    section.classList.toggle("active");
  }
  