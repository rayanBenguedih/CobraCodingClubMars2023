// JavaScript code pour activer / désactiver la visibilité
function toggleSection(sectionId) {

  // Récupère tout les éléments dans le "main" qui sont une "section" et qui ont un ID
  var allSections = document.querySelectorAll("main section[id]");
  for (var i = 0; i < allSections.length; i++) {
    var section = allSections[i];
    if (section.id === sectionId) {
      continue;
    }
    section.classList.remove("open");
  }

  // active/désactive la visibilité des éléments, les passant à leur version "open" dans le css
  var section = document.getElementById(sectionId);
  section.classList.toggle("open");
}


function togglePrincipleThree()
{
  toggleSection("principle3");
}

function togglePrincipleTwo()
{
  toggleSection("principle2");
}


function togglePrincipleOne()
{
  toggleSection("principle1");

}

function toggleAboutMe() {
  toggleSection("about-me");
}
