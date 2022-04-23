const fs = require('fs');
const questions = [
  {
    prompt: "What is the form of government of the United States?",
    answers: [
      "-Republic",
      "-Constitution-based federal republic",
      "-Representative democracy",
    ],
  },
  {
    prompt: "What is the supreme law of the land?\\*",
    answers: ["(U.S.) Constitution"],
  },
  {
    prompt: "Name one thing the U.S. Constitution does.",
    answers: [
      "Forms the government",
      "Defines powers of government",
      "Defines the parts of government",
      "Protects the rights of the people",
    ],
  },
  {
    prompt:
      'The U.S. Constitution starts with the words "We the People.� What does "We the People" mean?',
    answers: [
      "Self-government",
      "Popular sovereignty",
      "Consent of the governed",
      "People should govern themselves",
      "(Example of) social contract",
    ],
  },
  {
    prompt: "How are changes made to the U.S. Constitution?\n   Amendments",
    answers: ["The amendment process"],
  },
  {
    prompt: "What does the Bill of Rights protect?",
    answers: [
      "(The basic) rights of Americans",
      "(The basic) rights of people living in the United States",
    ],
  },
  {
    prompt: "How many amendments does the U.S. Constitution have?\\*",
    answers: ["Twenty-seven (27)"],
  },
  {
    prompt: "Why is the Declaration of Independence important?",
    answers: [
      "It says America is free from British control.",
      "It says all people are created equal.",
      "It identifies inherent rights.",
      "It identifies individual freedoms.",
    ],
  },
  {
    prompt:
      "What founding document said the American colonies were free from Britain?",
    answers: ["Declaration of Independence"],
  },
  {
    prompt:
      "Name two important ideas from the Declaration of Independence and the U.S. Constitution.",
    answers: [
      "Equality",
      "Liberty",
      "Social contract",
      "Natural rights",
      "Limited government",
      "Self-government",
    ],
  },
  {
    prompt:
      'The words "Life, Liberty, and the pursuit of Happiness" are in what founding document?',
    answers: ["Declaration of Independence"],
  },
  {
    prompt:
      "What is the economic system of the United States?\\*\n    Capitalism",
    answers: ["Free market economy"],
  },
  {
    prompt: "What is the rule of law?",
    answers: [
      "Everyone must follow the law.",
      "Leaders must obey the law.",
      "Government must obey the law.",
      "No one is above the law.",
    ],
  },
  {
    prompt: "Many documents influenced the U.S. Constitution. Name one.",
    answers: [
      "Declaration of Independence",
      "Articles of Confederation",
      "Federalist Papers",
      "Anti-Federalist Papers",
      "Virginia Declaration of Rights",
      "Fundamental Orders of Connecticut",
      "Mayflower Compact",
      "Iroquois Great Law of Peace",
    ],
  },
  {
    prompt: "There are three branches of government. Why?",
    answers: [
      "So one part does not become too powerful",
      "Checks and balances",
      "Separation of powers",
    ],
  },
  {
    prompt: "Name the three branches of government.",
    answers: [
      "Legislative, executive, and judicial",
      "Congress, president, and the courts",
    ],
  },
  {
    prompt:
      "The President of the United States is in charge of which branch of government?",
    answers: ["Executive branch"],
  },
  {
    prompt: "What part of the federal government writes laws?",
    answers: [
      "(U.S.) Congress",
      "(U.S. or national) legislature",
      "Legislative branch",
    ],
  },
  {
    prompt: "What are the two parts of the U.S. Congress?",
    answers: ["Senate and House (of Representatives)"],
  },
  {
    prompt: "Name one power of the U.S. Congress.\\*",
    answers: ["Writes laws", "Declares war", "Makes the federal budget"],
  },
  {
    prompt: "How many U.S. senators are there?",
    answers: ["One hundred (100)"],
  },
  {
    prompt: "How long is a term for a U.S. senator?",
    answers: ["Six (6) years"],
  },
  {
    prompt: "Who is one of your state�s U.S. senators now?",
    answers: [
      "Answers will vary. [District of Columbia residents and residents of U.S. territories should answer that D.C. (or the territory where the applicant lives) has no U.S. senators.]",
    ],
  },
  {
    prompt: "How many voting members are in the House of Representatives?",
    answers: ["Four hundred thirty-five (435)"],
  },
  {
    prompt: "How long is a term for a member of the House of Representatives?",
    answers: ["Two (2) years"],
  },
  {
    prompt:
      "Why do U.S. representatives serve shorter terms than U.S. senators?",
    answers: ["To more closely follow public opinion"],
  },
  { prompt: "How many senators does each state have?", answers: ["Two (2)"] },
  {
    prompt: "Why does each state have two senators?",
    answers: [
      "Equal representation (for small states)",
      "The Great Compromise (Connecticut Compromise)",
    ],
  },
  {
    prompt: "Name your U.S. representative.",
    answers: [
      "Answers will vary. [Residents of territories with nonvoting Delegates or Resident Commissioners may provide the name of that Delegate or Commissioner. Also acceptable is any statement that the territory has no (voting) representatives in Congress.]",
    ],
  },
  {
    prompt:
      "What is the name of the Speaker of the House of Representatives now?\\*",
    answers: [
      "Visit uscis.gov/citizenship/testupdates for the name of the Speaker of the House of Representatives.",
    ],
  },
  {
    prompt: "Who does a U.S. senator represent?",
    answers: ["Citizens of their state", "People of their state"],
  },
  {
    prompt: "Who elects U.S. senators?",
    answers: ["Citizens from their state"],
  },
  {
    prompt: "Who does a member of the House of Representatives represent?",
    answers: [
      "Citizens in their (congressional) district",
      "Citizens in their district",
      "People from their (congressional) district",
      "People in their district",
    ],
  },
  {
    prompt: "Who elects members of the House of Representatives?",
    answers: ["Citizens from their (congressional) district"],
  },
  {
    prompt: "Some states have more representatives than other states. Why?",
    answers: [
      "(Because of) the state�s population",
      "(Because) they have more people",
      "(Because) some states have more people",
    ],
  },
  {
    prompt:
      "The President of the United States is elected for how many years?\\*",
    answers: ["Four (4) years"],
  },
  {
    prompt: "The President of the United States can serve only two terms. Why?",
    answers: [
      "(Because of) the 22nd Amendment",
      "To keep the president from becoming too powerful",
    ],
  },
  {
    prompt: "What is the name of the President of the United States now?\\*",
    answers: [
      "Visit uscis.gov/citizenship/testupdates for the name of the President of the United States.",
    ],
  },
  {
    prompt:
      "What is the name of the Vice President of the United States now?\\*",
    answers: [
      "Visit uscis.gov/citizenship/testupdates for the name of the Vice President of the United States.",
    ],
  },
  {
    prompt: "If the president can no longer serve, who becomes president?",
    answers: ["The Vice President (of the United States)"],
  },
  {
    prompt: "Name one power of the president.",
    answers: [
      "Signs bills into law",
      "Vetoes bills",
      "Enforces laws",
      "Commander in Chief (of the military)",
      "Chief diplomat",
    ],
  },
  {
    prompt: "Who is Commander in Chief of the U.S. military?",
    answers: ["The President (of the United States)"],
  },
  {
    prompt: "Who signs bills to become laws?",
    answers: ["The President (of the United States)"],
  },
  {
    prompt: "Who vetoes bills?\\*",
    answers: ["The President (of the United States)"],
  },
  {
    prompt: "Who appoints federal judges?",
    answers: ["The President (of the United States)"],
  },
  {
    prompt: "The executive branch has many parts. Name one.",
    answers: [
      "President (of the United States)",
      "Cabinet",
      "Federal departments and agencies",
    ],
  },
  {
    prompt: "What does the President�s Cabinet do?",
    answers: ["Advises the President (of the United States)"],
  },
  {
    prompt: "What are two Cabinet-level positions?",
    answers: [
      "Attorney General",
      "Secretary of Agriculture",
      "Secretary of Commerce",
      "Secretary of Defense",
      "Secretary of Education",
      "Secretary of Energy",
      "Secretary of Health and Human Services",
      "Secretary of Homeland Security",
      "Secretary of Housing and Urban Development",
      "Secretary of the Interior",
      "Secretary of Labor",
      "Secretary of State",
      "Secretary of Transportation",
      "Secretary of the Treasury",
      "Secretary of Veterans Affairs",
      "Vice President (of the United States)",
    ],
  },
  {
    prompt: "Why is the Electoral College important?",
    answers: [
      "It decides who is elected president.",
      "It provides a compromise between the popular election of the president and congressional selection.",
    ],
  },
  {
    prompt: "What is one part of the judicial branch?",
    answers: ["Supreme Court", "Federal Courts"],
  },
  {
    prompt: "What does the judicial branch do?",
    answers: [
      "Reviews laws",
      "Explains laws",
      "Resolves disputes (disagreements) about the law",
      "Decides if a law goes against the (U.S.) Constitution",
      "52. What is the highest court in the United States?\\*",
    ],
  },
  { prompt: "How many seats are on the Supreme Court?", answers: ["Nine (9)"] },
  {
    prompt:
      "How many Supreme Court justices are usually needed to decide a case?",
    answers: ["Five (5)"],
  },
  {
    prompt: "How long do Supreme Court justices serve?",
    answers: ["(For) life", "Lifetime appointment", "(Until) retirement"],
  },
  {
    prompt: "Supreme Court justices serve for life. Why?",
    answers: [
      "To be independent (of politics)",
      "To limit outside (political) influence",
    ],
  },
  {
    prompt: "Who is the Chief Justice of the United States now?",
    answers: [
      "Visit uscis.gov/citizenship/testupdates for the name of the Chief Justice of the United States.",
    ],
  },
  {
    prompt: "Name one power that is only for the federal government.",
    answers: [
      "Print paper money",
      "Mint coins",
      "Declare war",
      "Create an army",
      "Make treaties",
      "Set foreign policy",
    ],
  },
  {
    prompt: "Name one power that is only for the states.",
    answers: [
      "Provide schooling and education",
      "Provide protection (police)",
      "Provide safety (fire departments)",
      "Give a driver�s license",
      "Approve zoning and land use",
    ],
  },
  {
    prompt: "What is the purpose of the 10th Amendment?",
    answers: [
      "(It states that the) powers not given to the federal government belong to the states or to the people.",
    ],
  },
  {
    prompt: "Who is the governor of your state now?\\*",
    answers: [
      "Answers will vary. [District of Columbia residents should answer that D.C. does not have a governor.]",
    ],
  },
  {
    prompt: "What is the capital of your state?",
    answers: [
      "Answers will vary. [District of Columbia residents should answer that D.C. is not a state and does not have a capital. Residents of U.S. territories should name the capital of the territory.]",
    ],
  },
  {
    prompt:
      "There are four amendments to the U.S. Constitution about who can vote. Describe one of them.",
    answers: [
      "Citizens eighteen (18) and older (can vote).",
      "You don�t have to pay (a poll tax) to vote.",
      "Any citizen can vote. (Women and men can vote.)",
      "A male citizen of any race (can vote).",
    ],
  },
  {
    prompt:
      "Who can vote in federal elections, run for federal office, and serve on a jury in the United States?",
    answers: ["Citizens", "Citizens of the United States", "U.S. citizens"],
  },
  {
    prompt: "What are three rights of everyone living in the United States?",
    answers: [
      "Freedom of expression",
      "Freedom of speech",
      "Freedom of assembly",
      "Freedom to petition the government",
      "Freedom of religion",
      "The right to bear arms",
    ],
  },
  {
    prompt:
      "What do we show loyalty to when we say the Pledge of Allegiance?\\*",
    answers: ["The United States", "The flag"],
  },
  {
    prompt:
      "Name two promises that new citizens make in the Oath of Allegiance.",
    answers: [
      "Give up loyalty to other countries",
      "Defend the (U.S.) Constitution",
      "Obey the laws of the United States",
      "Serve in the military (if needed)",
      "Serve (help, do important work for) the nation (if needed)",
      "Be loyal to the United States",
    ],
  },
  {
    prompt: "How can people become United States citizens?",
    answers: [
      "Naturalize",
      "Derive citizenship",
      "Be born in the United States",
    ],
  },
  {
    prompt:
      "What are two examples of civic participation in the United States?",
    answers: [
      "Vote",
      "Run for office",
      "Join a political party",
      "Help with a campaign",
      "Join a civic group",
      "Join a community group",
      "Give an elected official your opinion (on an issue)",
      "Contact elected officials",
      "Support or oppose an issue or policy",
      "Write to a newspaper",
    ],
  },
  {
    prompt: "What is one way Americans can serve their country?",
    answers: [
      "Vote",
      "Pay taxes",
      "Obey the law",
      "Serve in the military",
      "Run for office",
      "Work for local, state, or federal government",
    ],
  },
  {
    prompt: "Why is it important to pay federal taxes?",
    answers: [
      "Required by law",
      "All people pay to fund the federal government",
      "Required by the (U.S.) Constitution (16th Amendment)",
      "Civic duty",
    ],
  },
  {
    prompt:
      "It is important for all men age 18 through 25 to register for the Selective Service. Name one reason why.",
    answers: [
      "Required by law",
      "Civic duty",
      "Makes the draft fair, if needed",
    ],
  },
  {
    prompt: "The colonists came to America for many reasons. Name one.",
    answers: [
      "Freedom",
      "Political liberty",
      "Religious freedom",
      "Economic opportunity",
      "Escape persecution",
    ],
  },
  {
    prompt: "Who lived in America before the Europeans arrived?\\*",
    answers: ["American Indians", "Native Americans"],
  },
  {
    prompt: "What group of people was taken and sold as slaves?",
    answers: ["Africans", "People from Africa"],
  },
  {
    prompt:
      "What war did the Americans fight to win independence from Britain?",
    answers: [
      "American Revolution",
      "The (American) Revolutionary War",
      "War for (American) Independence",
    ],
  },
  {
    prompt:
      "Name one reason why the Americans declared independence from Britain.",
    answers: [
      "High taxes",
      "Taxation without representation",
      "British soldiers stayed in Americans� houses (boarding, quartering)",
      "They did not have self-government",
      "Boston Massacre",
      "Boston Tea Party (Tea Act)",
      "Stamp Act",
      "Sugar Act",
      "Townshend Acts",
      "Intolerable (Coercive) Acts",
    ],
  },
  {
    prompt: "Who wrote the Declaration of Independence?\\*",
    answers: ["(Thomas) Jefferson"],
  },
  {
    prompt: "When was the Declaration of Independence adopted?",
    answers: ["July 4, 1776"],
  },
  {
    prompt: "The American Revolution had many important events. Name one.",
    answers: [
      "(Battle of) Bunker Hill",
      "Declaration of Independence",
      "Washington Crossing the Delaware (Battle of Trenton)",
      "(Battle of) Saratoga",
      "Valley Forge (Encampment)",
      "(Battle of) Yorktown (British surrender at Yorktown)",
    ],
  },
  {
    prompt: "There were 13 original states. Name five.",
    answers: [
      "New Hampshire",
      "Massachusetts",
      "Rhode Island",
      "Connecticut",
      "New York",
      "New Jersey",
      "Pennsylvania",
      "Delaware",
      "Maryland",
      "Virginia",
      "North Carolina",
      "South Carolina",
      "Georgia",
    ],
  },
  {
    prompt: "What founding document was written in 1787?",
    answers: ["(U.S.) Constitution"],
  },
  {
    prompt:
      "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
    answers: [
      "(James) Madison",
      "(Alexander) Hamilton",
      "(John) Jay",
      "Publius",
    ],
  },
  {
    prompt: "Why were the Federalist Papers important?",
    answers: [
      "They helped people understand the (U.S.) Constitution.",
      "They supported passing the (U.S.) Constitution.",
      "85. Benjamin Franklin is famous for many things. Name one.",
    ],
  },
  {
    prompt: "George Washington is famous for many things. Name one.\\*",
    answers: [
      "�Father of Our Country�",
      "First president of the United States",
      "General of the Continental Army",
      "President of the Constitutional Convention",
    ],
  },
  {
    prompt: "Thomas Jefferson is famous for many things. Name one.",
    answers: [
      "Writer of the Declaration of Independence",
      "Third president of the United States",
      "Doubled the size of the United States (Louisiana Purchase)",
      "First Secretary of State",
      "Founded the University of Virginia",
      "Writer of the Virginia Statute on Religious Freedom",
    ],
  },
  {
    prompt: "James Madison is famous for many things. Name one.",
    answers: [
      "�Father of the Constitution�",
      "Fourth president of the United States",
      "President during the War of 1812",
      "One of the writers of the Federalist Papers",
    ],
  },
  {
    prompt: "Alexander Hamilton is famous for many things. Name one.",
    answers: [
      "First Secretary of the Treasury",
      "One of the writers of the Federalist Papers",
      "Helped establish the First Bank of the United States",
      "Aide to General George Washington",
      "Member of the Continental Congress",
    ],
  },
  {
    prompt: "What territory did the United States buy from France in 1803?",
    answers: ["Louisiana Territory", "Louisiana"],
  },
  {
    prompt:
      "Name one war fought by the United States in the 1800s.\n    War of 1812",
    answers: ["Mexican-American War", "Civil War", "Spanish-American War"],
  },
  {
    prompt: "Name the U.S. war between the North and the South.",
    answers: ["The Civil War"],
  },
  {
    prompt: "The Civil War had many important events. Name one.",
    answers: [
      "(Battle of) Fort Sumter",
      "Emancipation Proclamation",
      "(Battle of) Vicksburg",
      "(Battle of) Gettysburg",
      "Sherman�s March",
      "(Surrender at) Appomattox",
      "(Battle of) Antietam/Sharpsburg",
      "Lincoln was assassinated.",
    ],
  },
  {
    prompt: "Abraham Lincoln is famous for many things. Name one.\\*",
    answers: [
      "Freed the slaves (Emancipation Proclamation)",
      "Saved (or preserved) the Union",
      "Led the United States during the Civil War",
      "16th president of the United States",
      "Delivered the Gettysburg Address",
    ],
  },
  {
    prompt: "What did the Emancipation Proclamation do?",
    answers: [
      "Freed the slaves",
      "Freed slaves in the Confederacy",
      "Freed slaves in the Confederate states",
      "Freed slaves in most Southern states",
    ],
  },
  { prompt: "What U.S. war ended slavery?", answers: ["The Civil War"] },
  {
    prompt:
      "What amendment gives citizenship to all persons born in the United States?",
    answers: ["14th Amendment"],
  },
  {
    prompt: "When did all men get the right to vote?",
    answers: [
      "After the Civil War",
      "During Reconstruction",
      "(With the) 15th Amendment",
      "1870",
    ],
  },
  {
    prompt: "Name one leader of the women�s rights movement in the 1800s.",
    answers: [
      "Susan B. Anthony",
      "Elizabeth Cady Stanton",
      "Sojourner Truth",
      "Harriet Tubman",
      "Lucretia Mott",
      "Lucy Stone",
    ],
  },
  {
    prompt: ". Name one war fought by the United States in the 1900s.",
    answers: [
      "World War I",
      "World War II",
      "Korean War",
      "Vietnam War",
      "(Persian) Gulf War",
    ],
  },
  {
    prompt: ". Why did the United States enter World War I?",
    answers: [
      "Because Germany attacked U.S. (civilian) ships",
      "To support the Allied Powers (England, France, Italy, and Russia)",
      "To oppose the Central Powers (Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria)",
    ],
  },
  {
    prompt: ". When did all women get the right to vote?",
    answers: ["1920", "After World War I", "(With the) 19th Amendment"],
  },
  {
    prompt: ". What was the Great Depression?",
    answers: ["Longest economic recession in modern history"],
  },
  {
    prompt: ". When did the Great Depression start?",
    answers: ["The Great Crash (1929)", "Stock market crash of 1929"],
  },
  {
    prompt: ". Who was president during the Great Depression and World War II?",
    answers: ["(Franklin) Roosevelt"],
  },
  {
    prompt: ". Why did the United States enter World War II?",
    answers: [
      "(Bombing of) Pearl Harbor",
      "Japanese attacked Pearl Harbor",
      "To support the Allied Powers (England, France, and Russia)",
      "To oppose the Axis Powers (Germany, Italy, and Japan)",
    ],
  },
  {
    prompt: ". Dwight Eisenhower is famous for many things. Name one.",
    answers: [
      "General during World War II",
      "President at the end of (during) the Korean War",
      "34th president of the United States",
      "Signed the Federal-Aid Highway Act of 1956 (Created the Interstate System)",
    ],
  },
  {
    prompt: ". Who was the United States' main rival during the Cold War?",
    answers: ["Soviet Union", "USSR", "Russia"],
  },
  {
    prompt:
      ". During the Cold War, what was one main concern of the United States?",
    answers: ["Communism", "Nuclear war"],
  },
  {
    prompt: ". Why did the United States enter the Korean War?",
    answers: ["To stop the spread of communism"],
  },
  {
    prompt: ". Why did the United States enter the Vietnam War?",
    answers: ["To stop the spread of communism"],
  },
  {
    prompt: ". What did the civil rights movement do?",
    answers: ["Fought to end racial discrimination"],
  },
  {
    prompt: ". Martin Luther King, Jr. is famous for many things. Name one.\\*",
    answers: [
      "Fought for civil rights",
      "Worked for equality for all Americans",
      'Worked to ensure that people would "not be judged by the color of their skin, but by the content of their character"',
    ],
  },
  {
    prompt: ". Why did the United States enter the Persian Gulf War?",
    answers: ["To force the Iraqi military from Kuwait"],
  },
  {
    prompt:
      ". What major event happened on September 11, 2001 in the United States?\\*",
    answers: [
      "Terrorists attacked the United States",
      "Terrorists took over two planes and crashed them into the World Trade Center in New York City",
      "Terrorists took over a plane and crashed into the Pentagon in Arlington, Virginia",
      "Terrorists took over a plane originally aimed at Washington, D.C., and crashed in a field in Pennsylvania",
    ],
  },
  {
    prompt:
      ". Name one U.S. military conflict after the September 11, 2001 attacks.",
    answers: ["(Global) War on Terror", "War in Afghanistan", "War in Iraq"],
  },
  {
    prompt: ". Name one American Indian tribe in the United States.",
    answers: [
      "Apache",
      "Blackfeet",
      "Cayuga",
      "Cherokee",
      "Cheyenne",
      "Chippewa",
      "Choctaw",
      "Creek",
      "Crow",
      "Hopi",
      "Huron",
      "Inupiat",
      "Lakota",
      "Mohawk",
      "Mohegan",
      "Navajo",
      "Oneida",
      "Onondaga",
      "Pueblo",
      "Seminole",
      "Seneca",
      "Shawnee",
      "Sioux",
      "Teton",
      "Tuscarora",
      "For a complete list of tribes, please visit bia.gov.",
    ],
  },
  {
    prompt: ". Name one example of an American innovation.",
    answers: [
      "Light bulb",
      "Automobile (cars, internal combustion engine)",
      "Skyscrapers",
      "Airplane",
      "Assembly line",
      "Landing on the moon",
      "Integrated circuit (IC)",
    ],
  },
  {
    prompt: ". What is the capital of the United States?",
    answers: ["Washington, D.C."],
  },
  {
    prompt: ". Where is the Statue of Liberty?",
    answers: [
      "New York (Harbor)",
      "Liberty Island [Also acceptable are New Jersey, near New York City, and on the Hudson (River).]",
    ],
  },
  {
    prompt: ". Why does the flag have 13 stripes?\\*",
    answers: [
      "(Because there were) 13 original colonies",
      "(Because the stripes) represent the original colonies",
    ],
  },
  {
    prompt: ". Why does the flag have 50 stars?",
    answers: [
      "(Because there is) one star for each state",
      "(Because) each star represents a state",
      "(Because there are) 50 states",
    ],
  },
  {
    prompt: ". What is the name of the national anthem?",
    answers: ["The Star-Spangled Banner"],
  },
  {
    prompt:
      ". The Nation�s first motto was �E Pluribus Unum.� What does that mean?",
    answers: ["Out of many, one", "We all become one"],
  },
  {
    prompt: ". What is Independence Day?",
    answers: [
      "A holiday to celebrate U.S. independence (from Britain)",
      "The country�s birthday",
    ],
  },
  {
    prompt: ". Name three national U.S. holidays.\\*",
    answers: [
      "New Year�s Day",
      "Martin Luther King, Jr. Day",
      "Presidents Day (Washington�s Birthday)",
      "Memorial Day",
      "Independence Day",
      "Labor Day",
      "Columbus Day",
      "Veterans Day",
      "Thanksgiving Day",
      "Christmas Day",
    ],
  },
  {
    prompt: ". What is Memorial Day?",
    answers: ["A holiday to honor soldiers who died in military service"],
  },
  {
    prompt: ". What is Veterans Day?",
    answers: [
      "A holiday to honor people in the (U.S.) military",
      "A holiday to honor people who have served (in the U.S. military)",
    ],
  },
];
for(let i = 0; i < 15; i++){
    questions[i].category = "AMERICAN GOVERNMENT";
    questions[i].subCategory = "Principles of American Government";
}

for (let i = 15; i < 72; i++) {
        questions[i].category = "AMERICAN GOVERNMENT";
  questions[i].subCategory = "System of Government";
}
for (let i = 72; i < 89; i++) {
  questions[i].category = "AMERICAN HISTORY";
   questions[i].subCategory = "Colonial Period and Independence";
}
for (let i = 89; i < 100; i++) {
  questions[i].category = "AMERICAN HISTORY";
  questions[i].subCategory = "1800s";
}
for (let i = 100; i < 118; i++) {
  questions[i].category = "AMERICAN HISTORY";
  questions[i].subCategory =
    "Recent American History and Other Important Historical Information";
}

for (let i = 118; i < 124; i++) {
  questions[i].category = "SYMBOLS AND HOLIDAYS";
  questions[i].subCategory = "Symbols";

}
for (let i = 124; i < questions.length; i++) {
  questions[i].category = "SYMBOLS AND HOLIDAYS";
  questions[i].subCategory = "B: Holidays";
}

fs.writeFileSync('questions.json', JSON.stringify(questions));