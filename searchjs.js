let searchable = [
  "<a href='ground.html'>A-100(Classroom)</a>",
  "<a href='ground.html'>A-101(Research Lab)</a>",
  "<a href='ground.html'>A-102</a>",
  "<a href='ground.html'>A-103(Gents toilet)</a>",
  "<a href='ground.html'>A-104(HOD of Civil Department)</a>",
  "<a href='ground.html'>A-105(Geotechnical Lab)</a>",
  "<a href='ground.html'>A-106(GTE Lab)</a>",
  "<a href='ground.html'>A-107(GTE Lab)</a>",
  "<a href='ground.html'>A-108(Geology Lab)</a>",
  "<a href='ground.html'>A-109(Strength of material Lab)</a>",
  "<a href='ground.html'>A-110(Concrete technology Lab)</a>",
  "<a href='ground.html'>A-111(Store Room)</a>",
  "<a href='ground.html'>A-112(Controller of Exam)</a>",
  "<a href='ground.html'>A-113(Examination hall)</a>",
  "<a href='ground.html'>A-115(Surveying Lab)</a>",
  "<a href='ground.html'>A-116(Classroom)</a>",

  "<a href='1st.html'>Principle Office</a>",
  "<a href='1st.html'>Pantry</a>",
  "<a href='1st.html'>A-201(Student Section)</a>",
  "<a href='1st.html'>A-201(Account Section)</a>",
  "<a href='1st.html'>A-202(Gents Toilet)</a>",
  "<a href='1st.html'>A-203(Exam control room)</a>",
  "<a href='1st.html'>A-204(Civil Lab)</a>",
  "<a href='1st.html'>A-205(Civil Lab)</a>",
  "<a href='1st.html'>A-206(Administrative Office)</a>",
  "<a href='1st.html'>A-207(Board Room)</a>",
  "<a href='1st.html'>A-208(ESD Lab)</a>",
  "<a href='1st.html'>A-209(Linux Lab)</a>",
  "<a href='1st.html'>A-210(Self Learning Lab)</a>",
  "<a href='1st.html'>A-211(Office All Inclusive)</a>",
  "<a href='1st.html'>A-212(Ladies toilet)</a>",
  "<a href='1st.html'>A-213(Classroom)</a>",
  "<a href='1st.html'>A-214(Classroom)</a>",

  "<a href='2nd.html'>A-300</a>",
  "<a href='2nd.html'>A-301(Data Science Lab)</a>",
  "<a href='2nd.html'>A-302(Skill development lab)</a>",
  "<a href='2nd.html'>A-303(Gents Toilet)</a>",
  "<a href='2nd.html'>A-304(Faculty Room)</a>",
  "<a href='2nd.html'>A-305(Hardware Lab)</a>",
  "<a href='2nd.html'>A-306(Tutorial Room)</a>",
  "<a href='2nd.html'>A-307(Multimedia Lab)</a>",
  "<a href='2nd.html'>A-308(Project Lab)</a>",
  "<a href='2nd.html'>A-309(Linux Lab)</a>",
  "<a href='2nd.html'>A-310(Data Science Lab)</a>",
  "<a href='2nd.html'>A-311(PG Classroom)</a>",
  "<a href='2nd.html'>A-312(PG Classroom)</a>",
  "<a href='2nd.html'>A-313</a>",
  "<a href='2nd.html'>A-315(Lecture Hall)</a>",
  "<a href='2nd.html'>A-316(Lecture Hall)</a>",

  "<a href='3rd.html'>A-400(Depatment Library)</a>",
  "<a href='3rd.html'>A-401(Microwave & Antena Lab)</a>",
  "<a href='3rd.html'>A-402(Communication Lab)</a>",
  "<a href='3rd.html'>A-403</a>",
  "<a href='3rd.html'>A-404(Faculty Room)</a>",
  "<a href='3rd.html'>A-405(Project Lab)</a>",
  "<a href='3rd.html'>A-406(PG YLSI Lab)</a>",
  "<a href='3rd.html'>A-407<(Electronics design software & tool)/a>",
  "<a href='3rd.html'>A-408</a>",
  "<a href='3rd.html'>A-409(Seminar Hall)</a>",
  "<a href='3rd.html'>A-410(Tutorial Room)</a>",
  "<a href='3rd.html'>A-411(Tutorial Room)</a>",
  "<a href='3rd.html'>A-412(Staff Room)</a>",
  "<a href='3rd.html'>A-413</a>",
  "<a href='3rd.html'>A-414(Lecture Hall)</a>",
  "<a href='3rd.html'>A-415(Lecture Hall)</a>",


];

const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup', () => {
  let results = [];
  let input = searchInput.value;
  if (input.length) {
    results = searchable.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
  }
  renderResults(results);
});

function renderResults(results) {
  if (!results.length) {
    return searchWrapper.classList.remove('show');
  }

  const content = results
    .map((item) => {
      return `<li><a>${item}</a></li>`;
    })
    .join('');

  searchWrapper.classList.add('show');
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}
