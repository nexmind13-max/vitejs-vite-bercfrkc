import React, { useState, useEffect } from "react";
import {
  signInWithGoogle,
  sendLoginLink,
  completeLoginIfEmailLink,
  watchAuthState,
  signOutUser,
} from "./formroom-auth";
import {
  Calculator,
  BookOpen,
  FlaskConical,
  Atom,
  Palette,
  Landmark,
  BookMarked,
  Microscope,
  ArrowLeft,
  Check,
  X,
  CircleCheck,
  Target,
  Repeat,
  ClipboardCheck,
  Save,
  User,
  Mail,
} from "lucide-react";

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap');
`;

const COLORS = {
  ink: "#1B2A4A",
  paper: "#FAF7F0",
  paperDark: "#EFEAE0",
  slate: "#6B7280",
  green: "#1F4738",
  yellow: "#F2C94C",
};

const SUBJECTS = [
  {
    id: "maths",
    name: "Mathematics",
    color: "#3B6FD1",
    icon: Calculator,
    tagline: "Numbers, patterns, proof.",
    chapters: [
      {
        id: "linear-equations",
        title: "Solving Linear Equations",
        summary: "Balance both sides to find the unknown.",
        content:
          "A linear equation says two expressions are equal, and the variable (usually x) only ever appears on its own — never squared, cubed, or under a root. That's what makes it 'linear.' To solve one, do the same operation to both sides until x is alone: in 3x + 5 = 20, subtract 5 from both sides to get 3x = 15, then divide both sides by 3 to get x = 5. Whatever you do to one side, you must do to the other — that's what keeps the equation balanced.\n\nSome equations have the variable on both sides, like 5x + 2 = 2x + 14. Move all the x-terms to one side first (subtract 2x from both sides: 3x + 2 = 14), then solve as usual. Equations can also involve brackets — expand them first: 2(x + 3) = 16 becomes 2x + 6 = 16, then solve normally. Solutions aren't always whole positive numbers either; 2x + 10 = 4 gives x = -3, a negative solution, which is just as valid. Whatever method you use, it's always worth checking your answer by substituting it back into the original equation — if both sides come out equal, you know you solved it correctly.",
        examples: [
          "Example 1: Solve 4x - 3 = 9. Add 3 to both sides → 4x = 12. Divide both sides by 4 → x = 3.",
          "Example 2: Solve 5x + 2 = 3x + 10. Subtract 3x from both sides → 2x + 2 = 10. Subtract 2 → 2x = 8. Divide by 2 → x = 4.",
        ],
        quiz: [
          {
            q: "What is x in 2x + 4 = 12?",
            options: ["2", "4", "6", "8"],
            correct: 1,
          },
          {
            q: "To remove '+ 5' from one side of an equation, you should:",
            options: [
              "Add 5 to both sides",
              "Subtract 5 from both sides",
              "Multiply both sides by 5",
              "Ignore it",
            ],
            correct: 1,
          },
          {
            q: "Which of these is a linear equation?",
            options: ["x² + 1 = 5", "3x - 2 = 7", "1/x = 4", "x³ = 27"],
            correct: 1,
          },
        ],
      },
      {
        id: "fractions-percentages",
        title: "Fractions and Percentages",
        summary: "Parts of a whole, two different ways.",
        content:
          "A fraction shows part of a whole, like 3/4. A percentage does the same thing out of 100 — 3/4 is the same as 75%. To turn a fraction into a percentage, divide the top by the bottom and multiply by 100. To find a percentage of a number, turn the percentage into a decimal (divide by 100) and multiply — 20% of 50 is 0.2 × 50 = 10.\n\nFractions come in different forms worth knowing. A proper fraction has a smaller top than bottom (3/4); an improper fraction has a larger top (7/4); a mixed number combines a whole number with a fraction (1¾) — improper fractions and mixed numbers are just two ways of writing the same value. To add or subtract fractions, they need the same denominator (bottom number) first — 1/2 + 1/3 becomes 3/6 + 2/6 = 5/6. Percentages are also used for percentage increase and decrease, common in real situations like price changes: increasing 200 by 10% means adding 10% of 200 (which is 20), giving 220. Understanding the relationship between fractions, decimals, and percentages — three ways of expressing the same underlying value — makes it much easier to move between them depending on what a question asks for.",
        examples: [
          "Example 1: Convert 2/5 to a percentage. Divide: 2 ÷ 5 = 0.4. Multiply by 100 → 40%.",
          "Example 2: Find 15% of 80. Convert 15% to 0.15. Multiply: 0.15 × 80 = 12.",
          "Example 3: A student scored 18 out of 25 on a test. As a percentage: (18 ÷ 25) × 100 = 72%.",
        ],
        quiz: [
          {
            q: "What is 3/4 written as a percentage?",
            options: ["34%", "43%", "75%", "70%"],
            correct: 2,
          },
          {
            q: "What is 20% of 50?",
            options: ["5", "10", "15", "20"],
            correct: 1,
          },
          {
            q: "To convert a fraction to a percentage, you:",
            options: [
              "Multiply top and bottom by 100",
              "Divide top by bottom, then multiply by 100",
              "Add 100 to the fraction",
              "Subtract the bottom from the top",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "intro-geometry",
        title: "Introduction to Geometry",
        summary: "Angles and shapes, named and measured.",
        content:
          "Geometry studies shapes, sizes, and angles. Angles are measured in degrees: a right angle is 90°, a straight line is 180°, and a full turn is 360°. Triangles always have interior angles that add up to 180°, no matter their shape. Knowing this one rule lets you find a missing angle in any triangle as long as you know the other two.\n\nTriangles come in useful types worth recognizing: an equilateral triangle has all three sides (and angles) equal, at 60° each; an isosceles triangle has two equal sides and two equal angles; a right-angled triangle has one 90° angle. Quadrilaterals (four-sided shapes) have interior angles that always add up to 360° — a square, rectangle, and parallelogram are all quadrilaterals, distinguished by their side lengths and angles rather than their angle sum. Angles also follow rules outside of shapes: angles on a straight line always add up to 180°, and angles around a single point always add up to 360°. These angle rules are the toolkit geometry problems keep reusing, so learning them well pays off across many different questions, not just one type.",
        examples: [
          "Example 1: A triangle has angles of 50° and 60°. Find the third angle. 180° - 50° - 60° = 70°.",
          "Example 2: Two angles on a straight line add up to 180°. If one angle is 110°, the other is 180° - 110° = 70°.",
        ],
        quiz: [
          {
            q: "How many degrees are in a right angle?",
            options: ["45°", "90°", "180°", "360°"],
            correct: 1,
          },
          {
            q: "The interior angles of a triangle always add up to:",
            options: ["90°", "120°", "180°", "360°"],
            correct: 2,
          },
          {
            q: "A triangle has angles of 60° and 70°. What is the third angle?",
            options: ["40°", "50°", "60°", "70°"],
            correct: 1,
          },
        ],
      },
      {
        id: "simultaneous-equations",
        title: "Simultaneous Equations",
        summary: "Solving for two unknowns at once.",
        content:
          "Simultaneous equations are two equations sharing the same two unknowns, solved together. One common method is substitution: solve one equation for a variable, then substitute that into the other. For example, if x + y = 10 and x = y + 2, substitute to get (y + 2) + y = 10, so 2y = 8 and y = 4, meaning x = 6. Another method is elimination — adding or subtracting the equations to cancel one variable out entirely.\n\nElimination works best when the equations are lined up with matching x and y terms. If the coefficients (the numbers in front of a variable) aren't already equal, multiply one or both equations first — for 2x + y = 11 and x + y = 7, subtract directly since the y-terms already match, giving x = 4. If they don't match, like 2x + y = 11 and x + 3y = 17, you'd need to scale one equation up before subtracting cleanly. Simultaneous equations aren't just an abstract exercise — they model real situations with two unknowns and two conditions, like finding the cost of two different items when you know two different combined purchase totals. Whichever method you use, always check both original equations with your final x and y values, since a mistake partway through is easy to miss otherwise.",
        examples: [
          "Example 1 (substitution): Solve x + y = 12 and x = 2y. Substitute: 2y + y = 12 → 3y = 12 → y = 4, so x = 8.",
          "Example 2 (elimination): Solve x + y = 9 and x - y = 3. Add both equations: 2x = 12 → x = 6. Substitute back: 6 + y = 9 → y = 3.",
        ],
        quiz: [
          {
            q: "Simultaneous equations involve solving for:",
            options: ["One unknown", "Two unknowns together", "No unknowns", "Only fractions"],
            correct: 1,
          },
          {
            q: "If x + y = 10 and x = y + 2, what is y?",
            options: ["2", "4", "6", "8"],
            correct: 1,
          },
          {
            q: "The elimination method works by:",
            options: [
              "Guessing values randomly",
              "Adding or subtracting equations to cancel a variable",
              "Ignoring one equation",
              "Multiplying both equations by zero",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "perimeter-area-volume",
        title: "Perimeter, Area and Volume",
        summary: "Measuring edges, surfaces, and space.",
        content:
          "Perimeter is the distance around a shape's edge — add up all the sides. Area is the space a flat shape covers; a rectangle's area is length × width. Volume measures the space inside a 3D object; a box's volume is length × width × height. These three measure different things (a line, a surface, a space), so always check which one a question is actually asking for before you calculate.\n\nOther shapes have their own area formulas worth knowing: a triangle's area is ½ × base × height, and a circle's area is π × radius². A circle's perimeter has a special name — circumference — calculated as 2 × π × radius (or π × diameter). Units matter too: perimeter is measured in a single unit (cm, m), area in square units (cm², m²) since it covers two dimensions, and volume in cubic units (cm³, m³) since it covers three. A common mistake is mixing these up, or forgetting to convert units before calculating — if one side is in centimeters and another in meters, they need to match before you multiply. For composite shapes made of two simpler shapes joined together, break the shape into the simpler parts, calculate each separately, then add (or subtract, for a shape with a hole cut out) the results.",
        examples: [
          "Example 1: A rectangle is 8cm long and 5cm wide. Perimeter = 2(8 + 5) = 26cm. Area = 8 × 5 = 40cm².",
          "Example 2: A box is 4cm × 3cm × 2cm. Volume = 4 × 3 × 2 = 24cm³.",
        ],
        quiz: [
          {
            q: "The area of a rectangle is found by:",
            options: ["Length + width", "Length × width", "Length ÷ width", "Length − width"],
            correct: 1,
          },
          {
            q: "Perimeter measures:",
            options: ["Space inside a shape", "Distance around a shape's edge", "Volume of a box", "Weight of an object"],
            correct: 1,
          },
          {
            q: "A box's volume is calculated as:",
            options: [
              "Length × width",
              "Length × width × height",
              "Length + width + height",
              "Height only",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "intro-statistics",
        title: "Introduction to Statistics",
        summary: "Mean, median, and mode.",
        content:
          "Statistics helps summarize a set of numbers with a single typical value. The mean is the average — add all values and divide by how many there are. The median is the middle value once the numbers are sorted in order. The mode is the value that appears most often. Each tells a different story: the mean can be skewed by one very large or small number, while the median usually resists that.\n\nWhen there's an even number of values, the median is found by averaging the two middle numbers once sorted — for 2, 4, 6, 8, the median is (4+6)/2 = 5. A data set can have more than one mode (if two values tie for most frequent) or no mode at all (if every value appears once). Range is another useful measure — the difference between the highest and lowest values — showing how spread out the data is, though it says nothing about what's happening in between. Choosing which measure to use depends on the situation: the median is often preferred for something like average income, because a few extremely high earners would otherwise pull the mean upward and make it less representative of a 'typical' person. Understanding why a measure can mislead is just as important as knowing how to calculate it.",
        examples: [
          "Example 1: Find the mean of 4, 8, 6, 10, 2. Sum = 30. Divide by 5 → mean = 6.",
          "Example 2: Find the median of 3, 7, 1, 9, 5. Sorted: 1, 3, 5, 7, 9. Middle value → median = 5.",
          "Example 3: Find the mode of 2, 4, 4, 6, 4, 8. The value 4 appears most often → mode = 4.",
        ],
        quiz: [
          {
            q: "The mean is calculated by:",
            options: [
              "Finding the middle value",
              "Adding all values and dividing by how many there are",
              "Finding the most frequent value",
              "Subtracting the smallest from the largest",
            ],
            correct: 1,
          },
          {
            q: "The median is:",
            options: ["The average", "The most frequent value", "The middle value when sorted", "Always zero"],
            correct: 2,
          },
          {
            q: "Which measure is most resistant to one unusually large number?",
            options: ["Mean", "Median", "Mode", "None of them"],
            correct: 1,
          },
        ],
      },
    ],
  },
  {
    id: "english",
    name: "English Language",
    color: "#B5473A",
    icon: BookOpen,
    tagline: "Say exactly what you mean.",
    chapters: [
      {
        id: "parts-of-speech",
        title: "Parts of Speech",
        summary: "Every word plays a job in a sentence.",
        content:
          "Every word in a sentence does a job. Nouns name people, places, or things (Lagos, teacher). Verbs show action or state (run, is). Adjectives describe nouns (tall, quiet), while adverbs describe verbs (quickly, well). Knowing the job a word does helps you build clearer sentences and catch mistakes before you make them.\n\nThere are a few more word classes worth knowing. Pronouns replace nouns to avoid repetition (he, she, it, they — 'Ada is smart; she studies hard' instead of repeating 'Ada'). Prepositions show relationships, often of place or time (in, on, under, before — 'the book is on the table'). Conjunctions join words, phrases, or clauses (and, but, because — 'I was tired, but I finished my homework'). Interjections express sudden emotion (Wow! Oh!). A single word can even act as different parts of speech depending on context — 'run' is a verb in 'I run every morning' but a noun in 'I went for a run.' Recognizing which job a word is doing in a specific sentence, not just its dictionary definition, is what makes grammar actually useful rather than just a list of labels to memorize.",
        examples: [
          "Example: 'The tall boy ran quickly.' — 'boy' is a noun, 'ran' is a verb, 'tall' is an adjective describing the boy, and 'quickly' is an adverb describing how he ran.",
          "Example: 'Lagos is a busy city.' — 'Lagos' and 'city' are nouns, 'is' is a verb, and 'busy' is an adjective.",
        ],
        quiz: [
          {
            q: "In 'The clever student answered quickly,' which word is the adverb?",
            options: ["clever", "student", "answered", "quickly"],
            correct: 3,
          },
          {
            q: "A verb mainly shows:",
            options: ["A name", "An action or state", "A description", "A place"],
            correct: 1,
          },
          {
            q: "Which word is a noun in 'Chidi reads books'?",
            options: ["Chidi", "reads", "quickly", "and"],
            correct: 0,
          },
        ],
      },
      {
        id: "comprehension-skills",
        title: "Comprehension Skills",
        summary: "Reading for meaning, not just words.",
        content:
          "Comprehension means understanding what you read, not just recognizing the words. Before answering questions on a passage, read it once for the general idea, then read it again slowly for detail. Look for the topic sentence in each paragraph — it usually carries the main idea. When a question asks 'why' or 'how,' the answer is often stated directly in the text, so quote or point back to the exact line it comes from.\n\nComprehension questions generally fall into a few types, each needing a slightly different approach. Literal questions ask for facts stated directly in the text — the answer is right there if you look. Inferential questions ask you to read between the lines, combining clues the writer gives without spelling out the conclusion directly — for example, if a character 'slammed the door and stormed off,' you can infer they were angry even though the word 'angry' never appears. Vocabulary-in-context questions ask what a word means as it's used in that specific passage, which can differ from its usual dictionary meaning — always check the surrounding sentence rather than assuming. Finally, always answer in your own words unless a question specifically asks you to quote — restating an idea in your own language proves you actually understood it, rather than just copying text you don't fully grasp.",
        examples: [
          "Example: If a passage says 'The farmer was worried because the rain had not come for weeks,' and a question asks 'Why was the farmer worried?' — the answer is directly stated: 'because the rain had not come for weeks.'",
        ],
        quiz: [
          {
            q: "The topic sentence of a paragraph usually carries:",
            options: ["A random fact", "The main idea", "The title", "A question"],
            correct: 1,
          },
          {
            q: "Before answering detailed questions on a passage, you should first:",
            options: [
              "Skip the passage",
              "Read once for the general idea",
              "Guess the answers",
              "Read only the last line",
            ],
            correct: 1,
          },
          {
            q: "For a 'why' or 'how' question, the answer is often:",
            options: [
              "Never in the text",
              "Stated directly in the text",
              "Found in the title only",
              "Not needed",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "essay-writing-basics",
        title: "Essay Writing Basics",
        summary: "Introduction, body, conclusion.",
        content:
          "A good essay has three parts. The introduction states what the essay will discuss. The body — usually several paragraphs — develops one main point per paragraph, backed with examples. The conclusion sums up the argument without introducing new ideas. Before you write, jot down your main points in order; an essay with a plan almost always reads more clearly than one written straight through.\n\nEssays generally fall into a few types, and knowing which one you're writing shapes how you approach it. A narrative essay tells a story, usually in chronological order. A descriptive essay paints a picture with sensory detail — what something looks, sounds, or feels like. An argumentative essay takes a position and defends it with evidence and reasoning, often addressing the opposing view before countering it. An expository essay explains or informs, without necessarily arguing a side. Within any type, linking words help ideas flow between paragraphs — 'however' and 'on the other hand' signal contrast, 'furthermore' and 'in addition' signal building on a point, 'therefore' and 'as a result' signal a conclusion being drawn. Reading your essay aloud after writing it is one of the fastest ways to catch awkward sentences or missing words, since your ear often catches what your eye skims past.",
        examples: [
          "Example plan for 'The importance of education': Intro — education shapes a person's future. Body 1 — it opens job opportunities, with an example. Body 2 — it builds critical thinking, with an example. Conclusion — restate why education matters, without adding new points.",
        ],
        quiz: [
          {
            q: "What are the three main parts of an essay?",
            options: [
              "Title, body, references",
              "Introduction, body, conclusion",
              "Summary, quiz, glossary",
              "Question, answer, example",
            ],
            correct: 1,
          },
          {
            q: "Each body paragraph should mainly develop:",
            options: [
              "As many points as possible",
              "One main point, with examples",
              "The conclusion early",
              "A list of definitions",
            ],
            correct: 1,
          },
          {
            q: "The conclusion of an essay should:",
            options: [
              "Introduce a brand new argument",
              "Sum up the argument already made",
              "Repeat the essay word for word",
              "Ask the reader a question",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "tenses-verb-agreement",
        title: "Tenses and Verb Agreement",
        summary: "Matching verbs to time and subject.",
        content:
          "Tense shows when an action happens: past (I walked), present (I walk), or future (I will walk). Verb agreement means the verb must match its subject — a singular subject takes a singular verb ('she walks'), a plural subject takes a plural verb ('they walk'). A common mistake is switching tense mid-sentence without reason, which confuses the reader about when things actually happened.\n\nEach tense also has a continuous and perfect form worth knowing. The continuous form shows an action still in progress ('I am walking,' 'I was walking,' 'I will be walking'). The perfect form shows an action completed relative to another point in time ('I have walked,' 'I had walked,' 'I will have walked'). A tricky agreement case is a subject joined by 'and,' which usually takes a plural verb ('John and Mary are here'), while a subject joined by 'or' agrees with the noun closest to the verb ('Neither the teacher nor the students were ready'). Collective nouns — words like 'team' or 'family' that refer to a group — usually take a singular verb when treated as one unit ('The team is winning') but can take a plural verb when referring to the individual members acting separately. Getting comfortable with these edge cases is what separates solid, confident writing from writing that just avoids obvious mistakes.",
        examples: [
          "Example: Wrong — 'He go to school yesterday.' Correct — 'He went to school yesterday' (past tense, since 'yesterday' signals the past).",
          "Example: Wrong — 'The students is ready.' Correct — 'The students are ready' (plural subject needs a plural verb).",
        ],
        quiz: [
          {
            q: "'I will walk' is an example of which tense?",
            options: ["Past", "Present", "Future", "None"],
            correct: 2,
          },
          {
            q: "Which sentence shows correct verb agreement?",
            options: ["She walk to school", "She walks to school", "She walking school", "She walked walks"],
            correct: 1,
          },
          {
            q: "A plural subject should take:",
            options: ["A singular verb", "A plural verb", "No verb", "A past tense verb only"],
            correct: 1,
          },
        ],
      },
      {
        id: "figures-of-speech",
        title: "Figures of Speech",
        summary: "Saying more than the literal words.",
        content:
          "Figures of speech add color and meaning beyond the literal words. A simile compares two things using 'like' or 'as' ('brave as a lion'). A metaphor states one thing is another ('time is money'). Personification gives human qualities to non-human things ('the wind whispered'). Recognizing these helps you understand tone and emotion in a passage, not just its surface meaning.\n\nA few more are worth adding to your toolkit. Hyperbole is deliberate exaggeration for effect, not meant literally ('I've told you a million times'). Irony says one thing while meaning something quite different, often the opposite, usually for humor or emphasis ('What a lovely day' said during a storm). Onomatopoeia uses words that imitate the sound they describe (buzz, crash, whisper). Alliteration repeats the same starting sound across nearby words ('she sells seashells'), often used to create rhythm or emphasis, especially in poetry. Writers combine these deliberately — a single sentence might use both a metaphor and alliteration together. When you spot a figure of speech in a passage, always ask what effect it creates: does it exaggerate for humor, build vivid imagery, or set an emotional tone? That question matters more than just naming the device correctly.",
        examples: [
          "Example (simile): 'Her smile was like sunshine.'",
          "Example (metaphor): 'His heart is a stone.'",
          "Example (personification): 'The old house groaned in the storm.'",
        ],
        quiz: [
          {
            q: "'Brave as a lion' is an example of a:",
            options: ["Metaphor", "Simile", "Personification", "Pun"],
            correct: 1,
          },
          {
            q: "A metaphor is different from a simile because it:",
            options: [
              "Uses 'like' or 'as'",
              "States one thing IS another, without 'like' or 'as'",
              "Is always about animals",
              "Only appears in poetry",
            ],
            correct: 1,
          },
          {
            q: "'The wind whispered through the trees' is an example of:",
            options: ["Simile", "Personification", "A fact", "A tense"],
            correct: 1,
          },
        ],
      },
      {
        id: "letter-writing",
        title: "Letter Writing",
        summary: "Formal and informal letters.",
        content:
          "A formal letter (to a principal, employer, or official) uses polite, structured language: a clear address and date, a formal greeting like 'Dear Sir/Madam,' a direct purpose stated early, and a formal closing like 'Yours faithfully.' An informal letter (to a friend or relative) can be conversational and personal, with a casual greeting like 'Dear John,' and a warm closing like 'Best wishes.' Matching the tone to the relationship is the key skill.\n\nA formal letter follows a fairly fixed structure: your address and date at the top right, the recipient's address below that on the left, a formal greeting, an opening paragraph stating your purpose clearly, one or two body paragraphs with the necessary details, a closing paragraph (often requesting action or a reply), and a formal sign-off with your full name. The greeting determines the sign-off: 'Dear Sir/Madam' (when you don't know the name) pairs with 'Yours faithfully,' while 'Dear Mr. Johnson' (when you do know the name) pairs with 'Yours sincerely.' Informal letters are far more flexible — there's no fixed paragraph structure, contractions are fine ('I'm,' 'don't'), and the tone can be warm, humorous, or emotional depending on the relationship. The biggest mistake students make is mixing tones — slipping casual language into a formal letter, or writing a stiff, distant informal letter — so before writing, it helps to picture exactly who you're addressing and how you'd actually speak to them.",
        examples: [
          "Example (formal opening): 'Dear Sir, I am writing to request permission to be absent from school on Monday due to a medical appointment.'",
          "Example (informal opening): 'Dear Ada, I hope you're doing well! I just wanted to tell you about my holiday...'",
        ],
        quiz: [
          {
            q: "A formal letter would typically close with:",
            options: ["See ya!", "Yours faithfully,", "Bye for now", "Love always"],
            correct: 1,
          },
          {
            q: "An informal letter is best suited for:",
            options: ["A job application", "A letter to a friend", "A letter to a government office", "A legal complaint"],
            correct: 1,
          },
          {
            q: "The most important skill in letter writing is:",
            options: [
              "Using the longest words possible",
              "Matching tone to the relationship with the reader",
              "Avoiding punctuation",
              "Writing as fast as possible",
            ],
            correct: 1,
          },
        ],
      },
    ],
  },
  {
    id: "chemistry",
    name: "Chemistry",
    color: "#7B5EA7",
    icon: FlaskConical,
    tagline: "What everything is made of.",
    chapters: [
      {
        id: "atoms-periodic-table",
        title: "Atoms and the Periodic Table",
        summary: "The building blocks, sorted by pattern.",
        content:
          "Every substance is made of atoms — tiny particles with a nucleus (protons and neutrons) surrounded by electrons. The periodic table arranges all known elements by their number of protons. Elements in the same column share similar properties, because they have the same number of electrons in their outer shell. That's why sodium and potassium react in similar ways.\n\nThe periodic table's rows (periods) and columns (groups) both carry meaning. Moving across a period, elements gradually change properties as electrons fill up the same outer shell. Moving down a group, elements share a similar outer-shell electron count but gain extra inner shells, making them progressively larger and often more reactive (for metals). Elements are broadly split into metals (left and middle of the table — shiny, conductive, tend to lose electrons), non-metals (right side — poor conductors, tend to gain electrons), and metalloids (in between, with mixed properties). The mass number of an atom is its protons plus neutrons combined, while the atomic number is protons alone — this is why two atoms of the same element can have different masses (called isotopes) if they have different numbers of neutrons, while still behaving chemically the same way, since chemical behavior depends on electrons, not neutrons.",
        examples: [
          "Example: Oxygen has 8 protons, so its atomic number is 8. Carbon has 6 protons, giving it atomic number 6 — that single number is what makes each element unique.",
          "Example: Sodium (Na) and Potassium (K) sit in the same column of the periodic table. Both react vigorously with water, because they both have just 1 electron in their outer shell.",
        ],
        quiz: [
          {
            q: "What is at the center of an atom?",
            options: ["Electrons", "The nucleus", "Protons only", "Nothing"],
            correct: 1,
          },
          {
            q: "Elements in the same column of the periodic table:",
            options: [
              "Have no relationship",
              "Share similar properties",
              "Are always metals",
              "Have the same mass",
            ],
            correct: 1,
          },
          {
            q: "What determines an element's position on the periodic table?",
            options: [
              "Its color",
              "Its number of protons",
              "Its price",
              "Its state of matter",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "chemical-bonding",
        title: "Chemical Bonding",
        summary: "How atoms join to form compounds.",
        content:
          "Atoms bond to become more stable, usually by filling their outer electron shell. In ionic bonding, one atom gives electrons to another, creating charged ions that attract each other — like sodium and chlorine forming table salt. In covalent bonding, atoms share electrons instead of giving them away, which is how two hydrogen atoms and one oxygen atom form water.\n\nThere's a third major type worth knowing: metallic bonding, found in metals, where electrons aren't tied to any single atom but move freely through a 'sea' of shared electrons surrounding fixed metal ions — this is exactly why metals conduct electricity so well, since those free electrons can carry a current. The type of bond an element forms shapes its physical properties: ionic compounds tend to form hard, brittle crystals with high melting points and conduct electricity only when dissolved or molten; covalent compounds (like water or sugar) often have lower melting points and don't conduct electricity; metals are typically malleable (bendable) and excellent conductors even as solids. A useful rule of thumb is that metals bonding with non-metals tend to form ionic bonds (transferring electrons), while two non-metals bonding together tend to form covalent bonds (sharing electrons) — knowing which pairing you're looking at often tells you which bond type to expect before you even work through the detail.",
        examples: [
          "Example (ionic): Sodium (Na) gives away 1 electron to chlorine (Cl), forming Na⁺ and Cl⁻ ions that attract each other to form NaCl (table salt).",
          "Example (covalent): Two hydrogen atoms share electrons with one oxygen atom to form H₂O (water) — no electrons are fully transferred, they're shared.",
        ],
        quiz: [
          {
            q: "In ionic bonding, atoms mainly:",
            options: [
              "Share electrons equally",
              "Transfer electrons, forming charged ions",
              "Repel each other",
              "Do nothing",
            ],
            correct: 1,
          },
          {
            q: "In covalent bonding, atoms:",
            options: ["Share electrons", "Give away all electrons", "Lose their nucleus", "Merge completely"],
            correct: 0,
          },
          {
            q: "Table salt (sodium chloride) is an example of:",
            options: ["Covalent bonding", "Ionic bonding", "No bonding", "Metallic bonding only"],
            correct: 1,
          },
        ],
      },
      {
        id: "acids-bases-salts",
        title: "Acids, Bases and Salts",
        summary: "The pH scale and everyday chemistry.",
        content:
          "Acids release hydrogen ions in water and taste sour — like lemon juice or vinegar. Bases (also called alkalis when dissolved in water) release hydroxide ions and feel slippery — like soap. The pH scale measures this from 0 to 14: below 7 is acidic, 7 is neutral, above 7 is basic. When an acid and a base react together, they neutralize each other and form a salt plus water.\n\nAcids and bases are also described by strength, which is different from concentration. A strong acid (like hydrochloric acid) fully releases its hydrogen ions in water, while a weak acid (like vinegar's acetic acid) only partially does — meaning a strong acid isn't automatically more concentrated, just more complete in its reaction. Indicators are substances used to test pH by changing color: litmus paper turns red in acid and blue in base, while universal indicator gives a full range of colors matching specific pH values. Salts themselves vary widely depending on which acid and base formed them — table salt (from hydrochloric acid and sodium hydroxide) is just one example among thousands of possible salts, each with its own properties. Acid-base reactions aren't just a classroom topic either — they explain everyday events like why baking soda (a base) is used to neutralize excess stomach acid, or why farmers add lime (a base) to acidic soil to make it suitable for crops.",
        examples: [
          "Example: Hydrochloric acid (HCl) reacts with sodium hydroxide (NaOH), a base, to form sodium chloride (NaCl, a salt) and water: HCl + NaOH → NaCl + H₂O.",
          "Example: Lemon juice has a pH around 2 (strongly acidic), pure water is pH 7 (neutral), and soap is around pH 9-10 (basic).",
        ],
        quiz: [
          {
            q: "On the pH scale, a value of 3 is:",
            options: ["Acidic", "Neutral", "Basic", "Not possible"],
            correct: 0,
          },
          {
            q: "What is formed when an acid reacts with a base?",
            options: ["Only water", "A salt and water", "A gas only", "Nothing happens"],
            correct: 1,
          },
          {
            q: "A pH of exactly 7 is:",
            options: ["Strongly acidic", "Strongly basic", "Neutral", "Undefined"],
            correct: 2,
          },
        ],
      },
      {
        id: "states-of-matter",
        title: "States of Matter and Changes",
        summary: "Solid, liquid, gas — and switching between them.",
        content:
          "Matter exists mainly as solid (fixed shape and volume), liquid (fixed volume, takes the shape of its container), or gas (no fixed shape or volume). Heating a solid can melt it into a liquid, and heating a liquid can boil it into a gas — these are physical changes, since no new substance forms. Cooling reverses the process: gas condenses to liquid, liquid freezes to solid. The particles themselves don't change, only how tightly they're packed and how fast they move.\n\nAt the particle level, the difference between states comes down to how much energy the particles have and how they're arranged. In a solid, particles are packed tightly in a fixed pattern, only vibrating in place. In a liquid, particles have enough energy to slide past each other while staying close together, which is why liquids flow but keep a constant volume. In a gas, particles have enough energy to move freely and spread far apart, which is why gases expand to fill whatever container they're in. A substance's melting point and boiling point are fixed values for a given pressure — pure water always melts at 0°C and boils at 100°C at normal atmospheric pressure, which is why these points are used to identify unknown substances in a lab. There's also a less common fourth change worth knowing: sublimation, where a solid turns directly into a gas without passing through a liquid stage at all, as dry ice (solid carbon dioxide) does at room temperature.",
        examples: [
          "Example: Ice (solid water) melts into liquid water at 0°C, and liquid water boils into steam (gas) at 100°C — same substance, three different states.",
          "Example: Steam touching a cold window condenses back into water droplets — the reverse of boiling.",
        ],
        quiz: [
          {
            q: "Which state of matter has a fixed shape and volume?",
            options: ["Gas", "Liquid", "Solid", "Plasma"],
            correct: 2,
          },
          {
            q: "Melting is the change from:",
            options: ["Gas to liquid", "Solid to liquid", "Liquid to gas", "Solid to gas"],
            correct: 1,
          },
          {
            q: "Melting and boiling are called physical changes because:",
            options: [
              "A new substance forms",
              "No new substance forms, just a change in state",
              "They only happen in space",
              "They can't be reversed",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "chemical-reactions-equations",
        title: "Chemical Reactions and Equations",
        summary: "When substances change into something new.",
        content:
          "A chemical reaction happens when substances (reactants) transform into new substances (products) — unlike a physical change, something genuinely new forms. A chemical equation shows this using symbols, like 2H2 + O2 → 2H2O. The equation must be 'balanced,' meaning the same number of each type of atom appears on both sides, because atoms are never created or destroyed in a reaction, only rearranged.\n\nReactions come in recognizable types worth learning to spot. In a combination reaction, two or more substances join to form one product (2Mg + O₂ → 2MgO). In a decomposition reaction, one substance breaks down into two or more simpler ones, often needing heat. In a displacement reaction, a more reactive element pushes out a less reactive one from a compound (iron can displace copper from copper sulfate solution). Signs that a chemical reaction has actually happened include a color change, a temperature change, gas bubbles forming, or a solid forming out of a clear solution (a precipitate) — physical changes like melting show none of these. Balancing an equation is done by adjusting the large numbers in front of formulas (never the small subscript numbers within a formula, which would change what substance it actually represents) until the atom count matches on both sides — a skill that takes practice but follows the same logic every time: count, compare, adjust, recount.",
        examples: [
          "Example: Burning magnesium in oxygen: 2Mg + O₂ → 2MgO. Count the atoms — 2 magnesium and 2 oxygen on each side, so it's balanced.",
          "Example: Rusting is a chemical reaction: iron + oxygen → iron oxide (rust) — a new substance (rust) forms that didn't exist before.",
        ],
        quiz: [
          {
            q: "In a chemical reaction, the starting substances are called:",
            options: ["Products", "Reactants", "Catalysts", "Solutions"],
            correct: 1,
          },
          {
            q: "A balanced chemical equation has:",
            options: [
              "More atoms on one side than the other",
              "The same number of each atom on both sides",
              "No atoms at all",
              "Only one type of atom",
            ],
            correct: 1,
          },
          {
            q: "During a chemical reaction, atoms are:",
            options: ["Created", "Destroyed", "Rearranged, not created or destroyed", "Turned into energy only"],
            correct: 2,
          },
        ],
      },
      {
        id: "separation-techniques",
        title: "Separation Techniques",
        summary: "Filtration, evaporation, and distillation.",
        content:
          "Mixtures can often be separated using physical methods that don't need a chemical reaction. Filtration separates an insoluble solid from a liquid by passing the mixture through a filter. Evaporation separates a dissolved solid from a liquid by heating off the liquid, leaving the solid behind — how salt is recovered from salty water. Distillation goes further, collecting the evaporated liquid too, which is how clean water can be recovered from a saltwater mixture.\n\nA few more techniques handle mixtures that filtration and evaporation can't. Chromatography separates substances (often dyes or pigments) based on how fast each one moves through a material like paper, when carried by a solvent — different substances travel different distances, separating into visible bands. This is often used to identify unknown substances by comparing the pattern they leave. Decantation carefully pours off a liquid from a settled solid without disturbing the sediment at the bottom, useful when the solid particles are too large or heavy to need filtering. Magnetic separation removes magnetic materials like iron filings from a mixture using a magnet — no heating or filtering required at all. Choosing the right technique always comes down to the specific properties of the substances involved: their solubility, particle size, boiling point, or magnetism — which is why understanding *why* each method works matters more than just memorizing the list.",
        examples: [
          "Example: Sand mixed with water is separated by filtration — the sand stays on the filter paper, the water passes through.",
          "Example: To recover salt crystals from salty water, heat the water until it fully evaporates, leaving the salt behind in the container.",
        ],
        quiz: [
          {
            q: "Filtration is used to separate:",
            options: [
              "Two gases",
              "An insoluble solid from a liquid",
              "Two liquids with the same boiling point",
              "Heat from light",
            ],
            correct: 1,
          },
          {
            q: "Evaporation recovers the solid by:",
            options: ["Freezing the mixture", "Heating off the liquid", "Filtering twice", "Adding more water"],
            correct: 1,
          },
          {
            q: "Distillation is useful because it also:",
            options: [
              "Destroys the liquid completely",
              "Collects the evaporated liquid too",
              "Only works with solids",
              "Requires no heat",
            ],
            correct: 1,
          },
        ],
      },
    ],
  },
  {
    id: "physics",
    name: "Physics",
    color: "#2E9C8F",
    icon: Atom,
    tagline: "How things move and why.",
    chapters: [
      {
        id: "forces-and-motion",
        title: "Forces and Motion",
        summary: "Newton's laws, in plain terms.",
        content:
          "A force is a push or pull. Newton's First Law says an object stays still or keeps moving at the same speed unless a force acts on it. The Second Law says force equals mass times acceleration (F = ma) — heavier objects need more force to speed up. The Third Law says every action has an equal and opposite reaction, which is why you feel a boat move when you jump off it.\n\nForces are vectors, meaning they have both size and direction, and multiple forces acting on an object combine into a net (or resultant) force. If forces are balanced — equal in size, opposite in direction — the net force is zero, and the object's motion doesn't change (this is Newton's First Law in action, often called inertia). If forces are unbalanced, the object accelerates in the direction of the larger force. Friction is a force that resists motion between two surfaces in contact, always acting opposite to the direction of movement, which is why objects don't slide forever once you stop pushing them. Gravity is a constant downward force on everything near Earth's surface, giving objects weight (weight is actually a force — mass times gravitational acceleration — which is why an object's weight would be different on the Moon even though its mass stays the same). Recognizing which forces are acting on an object, and whether they're balanced, is usually the first real step in solving any motion problem.",
        examples: [
          "Example (F = ma): A 2kg object accelerates at 3 m/s². Force needed = 2 × 3 = 6 Newtons.",
          "Example (Third Law): When you push against a wall, the wall pushes back on you with equal force — that's why your hand doesn't go through it.",
        ],
        quiz: [
          {
            q: "Newton's First Law is also called the law of:",
            options: ["Gravity", "Inertia", "Motion energy", "Friction"],
            correct: 1,
          },
          {
            q: "F = ma relates force, mass, and:",
            options: ["Weight", "Acceleration", "Speed of light", "Time"],
            correct: 1,
          },
          {
            q: "Every action has an equal and opposite reaction — this is Newton's:",
            options: ["First Law", "Second Law", "Third Law", "Fourth Law"],
            correct: 2,
          },
        ],
      },
      {
        id: "energy-and-work",
        title: "Energy and Work",
        summary: "What it takes to move something.",
        content:
          "Work is done when a force moves an object over a distance — Work = Force × Distance. Energy is the capacity to do work, and it comes in forms like kinetic (motion) and potential (stored, like a raised object about to fall). The law of conservation of energy says energy can't be created or destroyed, only changed from one form to another — a falling object trades potential energy for kinetic energy as it drops.\n\nEnergy shows up in more forms worth recognizing: chemical energy (stored in food or fuel, released during reactions), thermal energy (linked to temperature and particle motion), electrical energy (linked to moving charge), and sound and light energy (carried by waves). Everyday machines and processes are really just energy converting from one form into another — a car engine converts chemical energy (fuel) into kinetic energy (motion) and thermal energy (heat, mostly wasted); a torch converts electrical energy into light energy. No conversion is perfectly efficient — some energy is almost always 'lost' as heat to the surroundings, which is why machines warm up during use. Power measures how quickly energy is transferred or work is done — Power = Work ÷ Time, measured in watts — which is why a more powerful engine does the same work faster, not necessarily using less total energy.",
        examples: [
          "Example: A force of 10N moves a box 4 meters. Work done = 10 × 4 = 40 Joules.",
          "Example: A book raised to a shelf has potential energy. When it falls, that potential energy converts into kinetic energy as it speeds up toward the ground.",
        ],
        quiz: [
          {
            q: "Work is calculated as:",
            options: ["Force + Distance", "Force × Distance", "Force ÷ Distance", "Force − Distance"],
            correct: 1,
          },
          {
            q: "Energy stored in a raised object is called:",
            options: ["Kinetic energy", "Potential energy", "Sound energy", "Chemical energy"],
            correct: 1,
          },
          {
            q: "The law of conservation of energy states that energy:",
            options: [
              "Can be created freely",
              "Can be destroyed when unused",
              "Can only change form, not be created or destroyed",
              "Always increases over time",
            ],
            correct: 2,
          },
        ],
      },
      {
        id: "simple-electric-circuits",
        title: "Simple Electric Circuits",
        summary: "How current, voltage, and resistance connect.",
        content:
          "An electric circuit is a closed loop that lets current flow, usually from a power source through a component and back. Voltage pushes the current, current is the flow of charge, and resistance slows that flow down. Ohm's Law ties them together: Voltage = Current × Resistance (V = IR). In a series circuit, components are connected in one loop, so if one fails, the whole circuit stops.\n\nA parallel circuit connects components on separate branches instead of one single loop, so current has more than one path to follow — if one component fails, the others keep working, since current can still flow through the remaining branches. This is why household wiring uses parallel circuits: one light bulb burning out doesn't switch off the whole house. Series and parallel circuits also behave differently with voltage and current: in a series circuit, current is the same throughout, but voltage splits across each component; in a parallel circuit, voltage is the same across each branch, but current splits between them. A circuit needs a complete, unbroken loop to work at all — a single break anywhere, even a tiny gap, stops current from flowing entirely, which is exactly how a switch works: opening it deliberately breaks the loop.",
        examples: [
          "Example (Ohm's Law): A circuit has a current of 2A and resistance of 5Ω. Voltage = 2 × 5 = 10 volts.",
          "Example: In a string of series-connected fairy lights, if one bulb burns out, the whole string goes dark — a real-world case of a series circuit failing.",
        ],
        quiz: [
          {
            q: "Ohm's Law is written as:",
            options: ["V = IR", "V = I/R", "V = I + R", "V = I − R"],
            correct: 0,
          },
          {
            q: "In a series circuit, if one component fails:",
            options: [
              "Only that component stops working",
              "The whole circuit stops",
              "Nothing changes",
              "The voltage doubles",
            ],
            correct: 1,
          },
          {
            q: "Resistance in a circuit mainly:",
            options: ["Speeds up current", "Slows down current flow", "Creates voltage", "Has no effect"],
            correct: 1,
          },
        ],
      },
      {
        id: "waves-and-sound",
        title: "Waves and Sound",
        summary: "How vibrations travel and carry energy.",
        content:
          "A wave carries energy from one place to another without moving matter itself along with it. Sound is a wave caused by vibrations traveling through a medium like air — no medium, no sound, which is why sound can't travel through empty space. Waves have a wavelength (distance between repeating points), frequency (how many waves pass a point per second), and amplitude (how big the wave is, related to loudness for sound).\n\nWaves fall into two broad categories based on how their vibration moves relative to their direction of travel. In a transverse wave, particles vibrate perpendicular (sideways) to the direction the wave travels — light and water waves are transverse. In a longitudinal wave, particles vibrate parallel to (along) the direction of travel, compressing and stretching as the wave passes — sound is longitudinal, moving through air as a series of compressions and rarefactions (stretched-out regions). Frequency determines pitch for sound: a high frequency sounds high-pitched, a low frequency sounds low-pitched — this is different from amplitude, which determines loudness, not pitch. Sound travels at different speeds through different mediums, generally fastest through solids, slower through liquids, and slowest through gases like air, because particles that are more tightly packed transfer vibrations to each other more quickly.",
        examples: [
          "Example: Astronauts in space can't hear each other shout directly, because there's no air (medium) for the sound wave to travel through — they use radios instead.",
          "Example: A guitar string plucked hard vibrates with greater amplitude, producing a louder sound, without necessarily changing its pitch.",
        ],
        quiz: [
          {
            q: "Sound needs a medium to travel because:",
            options: [
              "It's a type of light",
              "It's a vibration that travels through matter",
              "It only travels through metal",
              "It doesn't actually move",
            ],
            correct: 1,
          },
          {
            q: "The distance between two repeating points on a wave is its:",
            options: ["Frequency", "Amplitude", "Wavelength", "Speed"],
            correct: 2,
          },
          {
            q: "For sound, amplitude is related to:",
            options: ["Pitch", "Loudness", "Color", "Temperature"],
            correct: 1,
          },
        ],
      },
      {
        id: "light-and-reflection",
        title: "Light and Reflection",
        summary: "How light bounces and bends.",
        content:
          "Light travels in straight lines called rays. When light hits a smooth surface like a mirror, it reflects following one clear rule: the angle it hits the surface equals the angle it bounces off at. When light passes from one material into another — like air into water — it bends, a process called refraction, which is why a straw in a glass of water looks 'broken' at the surface.\n\nReflection off a smooth, polished surface (like a mirror) is called regular reflection, producing a clear image because all the light rays bounce off in an organized, predictable pattern. Reflection off a rough surface (like paper or an unpolished wall) is called diffuse reflection — light still obeys the same reflection rule at each tiny point, but because the surface is uneven, the rays scatter in many different directions, which is why you can't see a clear image in a piece of paper even though light is bouncing off it constantly. Refraction happens because light travels at different speeds in different materials — it slows down entering a denser material like water or glass, and that change in speed is what bends its path. This is also why a glass prism can split white light into a rainbow of colors: each color bends by a slightly different amount as it enters and exits the glass, since each color of light travels at a very slightly different speed.",
        examples: [
          "Example: A ray of light hits a mirror at 30° from the surface. It reflects off at exactly 30° on the other side, following the law of reflection.",
          "Example: Light bends as it enters a swimming pool, which is why the pool often looks shallower than it actually is — this is refraction.",
        ],
        quiz: [
          {
            q: "The rule for reflection states that:",
            options: [
              "Light always speeds up",
              "The angle of incidence equals the angle of reflection",
              "Light disappears on a mirror",
              "Light only bounces at night",
            ],
            correct: 1,
          },
          {
            q: "Refraction is best described as light:",
            options: ["Bouncing off a mirror", "Bending as it passes between materials", "Disappearing", "Turning into sound"],
            correct: 1,
          },
          {
            q: "A straw looking 'broken' in water is due to:",
            options: ["Reflection", "Refraction", "Absorption", "Gravity"],
            correct: 1,
          },
        ],
      },
      {
        id: "heat-and-temperature",
        title: "Heat and Temperature",
        summary: "Energy transfer versus how hot something feels.",
        content:
          "Heat and temperature aren't the same thing. Temperature measures how hot or cold something is; heat is the energy that flows from a hotter object to a colder one until they reach the same temperature. Heat can transfer three ways: conduction (through direct contact, like a metal spoon in hot soup), convection (through a moving fluid, like warm air rising), and radiation (through waves, like heat from the sun with no medium needed at all).\n\nConduction works best in solids, especially metals, because their particles are tightly packed and can pass vibrations to their neighbors quickly — metals are described as good conductors, while materials like wood, air, and plastic are poor conductors (insulators), which is why a wooden spoon stays cool even in hot soup. Convection only happens in fluids (liquids and gases) because it relies on particles being free to move — warm fluid becomes less dense and rises, while cooler, denser fluid sinks to take its place, setting up a circulating convection current, which is exactly how a room warms up from a single heater rather than staying hot only right next to it. Temperature and heat are also measured differently in practice: temperature is measured directly with a thermometer, while the amount of heat energy transferred depends on both the temperature difference and the mass and material of the objects involved — a large pot of lukewarm water can actually contain more total heat energy than a small cup of much hotter water.",
        examples: [
          "Example (conduction): A metal spoon left in a hot pot becomes hot itself, because heat travels along the metal by direct contact between particles.",
          "Example (radiation): You feel the sun's warmth on your skin even though space between the sun and Earth is empty — heat radiation needs no medium.",
        ],
        quiz: [
          {
            q: "Heat naturally flows from:",
            options: ["Cold to hot", "Hot to cold", "It doesn't flow", "Only within solids"],
            correct: 1,
          },
          {
            q: "Heat transfer through direct contact is called:",
            options: ["Convection", "Radiation", "Conduction", "Reflection"],
            correct: 2,
          },
          {
            q: "Which heat transfer method needs no medium at all?",
            options: ["Conduction", "Convection", "Radiation", "None of them"],
            correct: 2,
          },
        ],
      },
    ],
  },
  {
    id: "art",
    name: "Art",
    color: "#E08A2E",
    icon: Palette,
    tagline: "Seeing, then making.",
    chapters: [
      {
        id: "elements-of-design",
        title: "Elements of Design",
        summary: "Line, shape, color, texture, space.",
        content:
          "Every drawing or design is built from a few core elements: line (a mark connecting two points), shape (an enclosed area), color, texture (how a surface looks or feels), and space (the area around and between objects). Learning to notice these elements in any piece of art — a poster, a painting, a building — is the first step to making your own deliberate choices instead of guessing.\n\nTwo more elements round out the full set. Form refers to three-dimensional shape — while a shape is flat (a circle), a form has depth (a sphere), which is why sculpture and architecture are often discussed in terms of form rather than shape. Value refers to how light or dark a color or tone is, independent of the color itself — a strong drawing often works even in black and white because its values (the contrast between light and dark areas) create the sense of depth and focus, not the color choices. Lines themselves carry meaning beyond just outlining shapes: horizontal lines can feel calm and stable, vertical lines can feel strong or formal, diagonal lines can feel dynamic or unstable, and curved lines can feel soft or organic. Once you start noticing which elements a piece leans on most heavily — is it built from bold shapes, or subtle value shifts, or expressive line work — you start to understand not just what an artist made, but the choices behind how they made it.",
        quiz: [
          {
            q: "Which is NOT one of the core elements of design?",
            options: ["Line", "Shape", "Grammar", "Texture"],
            correct: 2,
          },
          {
            q: "An enclosed area in a design is called:",
            options: ["A shape", "A line", "A tone", "A frame"],
            correct: 0,
          },
          {
            q: "Texture refers to:",
            options: [
              "How loud a color is",
              "How a surface looks or feels",
              "The size of a canvas",
              "The artist's signature",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "color-theory",
        title: "Color Theory",
        summary: "How colors relate and combine.",
        content:
          "The color wheel organizes colors by relationship. Primary colors (red, yellow, blue) can't be mixed from other colors — they make all the rest. Secondary colors (orange, green, purple) come from mixing two primaries. Complementary colors sit opposite each other on the wheel (like red and green) and create strong contrast when placed together, while colors next to each other blend more calmly.\n\nA few more relationships build on this foundation. Tertiary colors come from mixing a primary with a neighboring secondary color (like red-orange or blue-green), filling in the wheel further. Analogous colors sit next to each other on the wheel (like blue, blue-green, and green) and tend to create a harmonious, unified feeling when used together, since they share an underlying hue. Warm colors (reds, oranges, yellows) tend to feel energetic and can appear to advance toward the viewer, while cool colors (blues, greens, purples) tend to feel calm and can appear to recede into the background — a principle used deliberately in painting and design to create depth or draw attention. Beyond hue (the actual color), every color also has saturation (how intense or dull it is) and value (how light or dark it is) — two colors can share the same hue but feel completely different depending on how saturated or how light/dark each version is, which is why 'color' is really three variables working together, not one.",
        quiz: [
          {
            q: "Which of these is a primary color?",
            options: ["Green", "Orange", "Blue", "Purple"],
            correct: 2,
          },
          {
            q: "Secondary colors are made by:",
            options: [
              "Mixing two primary colors",
              "Using only black and white",
              "Never mixing colors",
              "Diluting a primary with water",
            ],
            correct: 0,
          },
          {
            q: "Complementary colors sit:",
            options: [
              "Next to each other on the wheel",
              "Opposite each other on the wheel",
              "Nowhere on the wheel",
              "Only in black and white art",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "principles-of-design",
        title: "Principles of Design",
        summary: "Balance, contrast, and rhythm.",
        content:
          "While elements are what a design is made of, principles are how those elements are arranged. Balance spreads visual weight evenly (or deliberately unevenly) across a piece. Contrast uses difference — in color, size, or shape — to draw the eye to what matters most. Rhythm repeats an element to create a sense of movement, the way a pattern of shapes leads your eye across a page.\n\nA few more principles complete the set. Emphasis creates a clear focal point — the one thing in a design the eye is meant to land on first, often achieved through contrast, size, or placement. Proportion concerns how the size of elements relate to each other and to the whole — a giant head on a tiny body reads as cartoonish precisely because it breaks realistic proportion, whether or not that's the intended effect. Unity (or harmony) means all the parts feel like they belong together, usually achieved by repeating a color palette, a shape language, or a texture throughout a piece. Balance itself comes in different forms: symmetrical balance mirrors elements evenly on either side of a center line, feeling formal and stable, while asymmetrical balance uses different elements of different visual weight to balance each other without mirroring, feeling more dynamic and modern. Strong design rarely uses just one principle — a good poster might use contrast to create emphasis, while rhythm and unity tie the whole layout together.",
        quiz: [
          {
            q: "Balance in design refers to:",
            options: [
              "How colors are named",
              "How visual weight is spread across a piece",
              "The price of materials",
              "The size of the canvas only",
            ],
            correct: 1,
          },
          {
            q: "Contrast is mainly used to:",
            options: [
              "Hide the main subject",
              "Draw the eye to what matters most",
              "Make everything look the same",
              "Remove color",
            ],
            correct: 1,
          },
          {
            q: "Rhythm in design is created by:",
            options: [
              "Repeating an element",
              "Using only one color",
              "Erasing all lines",
              "Random placement",
            ],
            correct: 0,
          },
        ],
      },
      {
        id: "drawing-techniques-perspective",
        title: "Drawing Techniques and Perspective",
        summary: "Making flat paper look three-dimensional.",
        content:
          "Perspective is what makes a flat drawing look like it has depth. In one-point perspective, parallel lines (like the edges of a road) appear to converge at a single vanishing point on the horizon, making objects look smaller as they get farther away. Shading adds to this illusion — objects closer to a light source appear brighter, while surfaces facing away fall into shadow, giving flat shapes a sense of form.\n\nOne-point perspective works well for scenes viewed straight-on, like a hallway or road stretching ahead. Two-point perspective uses two vanishing points instead of one, better suited for drawing an object viewed from an angle, like the corner of a building, where two sets of parallel lines each converge to their own vanishing point. Beyond perspective, shading itself relies on a few recognizable elements: highlight (the brightest point, closest to the light source), midtone (the base color in regular light), core shadow (the darkest part of the object itself, facing away from light), reflected light (a faint bounce-back of light within the shadow area), and cast shadow (the shadow the object throws onto a nearby surface). Together, perspective and shading are what let an artist trick the eye into seeing depth and solidity on what is, physically, still just a flat sheet of paper.",
        quiz: [
          {
            q: "In one-point perspective, parallel lines appear to:",
            options: [
              "Stay the same distance apart forever",
              "Converge at a single vanishing point",
              "Curve randomly",
              "Disappear immediately",
            ],
            correct: 1,
          },
          {
            q: "Objects farther away in a perspective drawing appear:",
            options: ["Larger", "Smaller", "The same size always", "Brighter"],
            correct: 1,
          },
          {
            q: "Shading helps a drawing look three-dimensional by:",
            options: [
              "Adding random dots",
              "Showing light and shadow on surfaces",
              "Using only one color",
              "Removing all lines",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "art-history-movements",
        title: "Art History Movements",
        summary: "How art styles have changed over time.",
        content:
          "Art movements are periods where artists shared a similar style or idea. The Renaissance (14th–17th century) focused on realism, proportion, and human anatomy. Impressionism (late 1800s) broke from realism, favoring loose brushstrokes and capturing light and mood over precise detail. Modern art (20th century onward) includes many movements, like Cubism, which showed subjects from multiple angles at once rather than realistically.\n\nEach movement generally arose partly as a reaction to the one before it, which is a useful way to understand why art history moves the way it does. Baroque art (17th–18th century) followed the Renaissance, favoring drama, movement, and intense contrast between light and dark. Impressionism later rejected the idea that a painting must look perfectly polished and precise, instead trying to capture a fleeting moment or feeling. Expressionism (early 1900s) pushed further from realism still, distorting shapes and colors to convey raw emotion rather than accurate appearance. Surrealism (1920s onward) explored dream-like, irrational imagery, often influenced by ideas about the unconscious mind. Recognizing a movement isn't just about naming dates — it's about noticing what problem or idea the artists of that period seemed to be responding to, since that context usually explains the stylistic choices far better than the style alone.",
        quiz: [
          {
            q: "The Renaissance is known for its focus on:",
            options: ["Abstract shapes only", "Realism, proportion, and anatomy", "Random splatters", "Digital tools"],
            correct: 1,
          },
          {
            q: "Impressionism is best known for:",
            options: [
              "Extreme realism",
              "Loose brushstrokes capturing light and mood",
              "Only black and white art",
              "Sculpture exclusively",
            ],
            correct: 1,
          },
          {
            q: "Cubism is known for showing subjects:",
            options: [
              "Exactly as they appear in real life",
              "From multiple angles at once",
              "Only in one color",
              "As photographs",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "sculpture-3d-art",
        title: "Sculpture and 3D Art",
        summary: "Art you can walk around.",
        content:
          "Unlike a drawing or painting, sculpture exists in three dimensions and can often be viewed from every angle. Sculptors work by carving (removing material from a solid block, like stone), modeling (shaping a soft material like clay), or assembling (joining separate pieces together, like welded metal). The choice of technique depends heavily on the material — you carve marble, but you model clay.\n\nA fourth major technique is casting, where a liquid material (like molten bronze) is poured into a mold and allowed to harden into the final shape — this allows the same sculpture to be reproduced multiple times from one mold, unlike carving or modeling, which typically produce a single unique piece. Sculptures are also categorized by how they relate to their surrounding space: a freestanding (or 'in the round') sculpture stands independently and can be viewed from all sides, while a relief sculpture is attached to a flat background and only projects partly outward, viewed mainly from the front — like the carved scenes often found on ancient temple walls. The choice of material shapes not just the technique but the meaning of a piece too — bronze suggests permanence and formality, while something like wood or clay can feel warmer or more temporary, which is why sculptors often choose their material as deliberately as their subject.",
        quiz: [
          {
            q: "Carving involves:",
            options: ["Adding material", "Removing material from a solid block", "Melting material", "Painting a surface"],
            correct: 1,
          },
          {
            q: "Modeling is best suited to a material like:",
            options: ["Stone", "Marble", "Clay", "Steel beams"],
            correct: 2,
          },
          {
            q: "A key difference between sculpture and painting is that sculpture:",
            options: [
              "Is always smaller",
              "Exists in three dimensions",
              "Cannot use color",
              "Is never displayed in museums",
            ],
            correct: 1,
          },
        ],
      },
    ],
  },
  {
    id: "government",
    name: "Government",
    color: "#3E7C4A",
    icon: Landmark,
    tagline: "How power is organized.",
    chapters: [
      {
        id: "arms-of-government",
        title: "The Three Arms of Government",
        summary: "Legislature, Executive, Judiciary.",
        content:
          "Most democracies split power into three arms so no single group holds too much control. The Legislature makes laws (like the National Assembly). The Executive carries out and enforces laws (led by the President or Prime Minister). The Judiciary interprets laws and settles disputes (the courts). This separation is called the doctrine of separation of powers, and it lets each arm check the others.\n\nEach arm typically has ways of limiting the power of the others, a system often called 'checks and balances.' The Legislature can reject or amend proposals from the Executive, control government spending, and in many systems can remove certain officials through processes like impeachment. The Executive can often veto (reject) laws passed by the Legislature, though the Legislature may be able to override that veto with a strong enough vote. The Judiciary can strike down laws or executive actions that conflict with the constitution, a power known as judicial review. This overlapping web of checks means no single arm can act completely unchecked — a law needs the Legislature to pass it, the Executive to enforce it, and (if challenged) the Judiciary to confirm it's constitutional. The system isn't always fast or efficient, but that friction is intentional, designed to slow down any single group from concentrating too much power too quickly.",
        quiz: [
          {
            q: "Which arm of government makes laws?",
            options: ["Executive", "Judiciary", "Legislature", "The press"],
            correct: 2,
          },
          {
            q: "The Judiciary's main role is to:",
            options: [
              "Make new laws",
              "Interpret laws and settle disputes",
              "Collect taxes",
              "Run elections only",
            ],
            correct: 1,
          },
          {
            q: "Splitting power into three arms is called:",
            options: [
              "Federalism",
              "Separation of powers",
              "Democracy",
              "Bureaucracy",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "types-of-government",
        title: "Types of Government",
        summary: "Democracy, monarchy, and beyond.",
        content:
          "Governments differ in who holds power and how. In a democracy, citizens elect leaders and can vote them out. In a monarchy, power passes through a royal family, sometimes with limited authority (constitutional monarchy) and sometimes with near-total control (absolute monarchy). In a dictatorship, one person or a small group holds power without free elections. Most modern states blend features, but the core question is always the same: who decides, and how are they held accountable?\n\nDemocracies themselves take different forms. In a direct democracy, citizens vote on laws and decisions themselves, rather than through elected representatives — practical mainly for very small communities or specific referendums. In a representative democracy, far more common today, citizens elect representatives who make decisions on their behalf, as in most national governments. Federal systems (like Nigeria or the United States) divide power between a central government and regional states or provinces, each with their own authority over certain matters, while unitary systems concentrate power mainly at the central level, with regions holding whatever authority the center chooses to give them. An oligarchy is government by a small, often wealthy or privileged group, which can overlap with other systems — a country might hold elections on paper while real power sits with a narrow elite behind the scenes. Understanding these categories helps you evaluate not just what a government calls itself, but how power actually flows in practice.",
        quiz: [
          {
            q: "In a democracy, leaders are mainly chosen through:",
            options: ["Inheritance", "Elections", "Military force", "Random selection"],
            correct: 1,
          },
          {
            q: "A monarchy with limited royal power, alongside elected officials, is called:",
            options: [
              "An absolute monarchy",
              "A constitutional monarchy",
              "A dictatorship",
              "A republic",
            ],
            correct: 1,
          },
          {
            q: "A dictatorship is best described as:",
            options: [
              "Power shared equally among citizens",
              "One person or small group holding power without free elections",
              "A government with no leader",
              "A type of democracy",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "citizenship-civic-duties",
        title: "Citizenship and Civic Duties",
        summary: "Rights come with responsibilities.",
        content:
          "A citizen is a recognized member of a state, with both rights and responsibilities. Rights might include voting, free speech, and access to education. Responsibilities include obeying the law, paying taxes, and respecting the rights of others. Civic duty also includes staying informed and participating — voting in elections, or simply understanding how decisions that affect your community get made.\n\nCitizenship can be acquired in a few recognized ways. Citizenship by birth is granted automatically to someone born within a country's territory, or born to citizen parents, depending on the country's specific rules. Citizenship by naturalization is granted to someone who wasn't born a citizen but meets legal requirements (like years of residency) and formally applies to become one. Rights themselves are often grouped into categories: civil rights protect individual freedom (speech, religion, movement), political rights allow participation in government (voting, running for office), and social rights guarantee access to things like education and healthcare. Civic responsibility goes beyond simply avoiding breaking the law — active citizenship includes things like jury duty where applicable, respecting public property, and holding elected officials accountable through legitimate means like voting, petitions, or peaceful protest, all of which depend on citizens actually understanding how their government works.",
        quiz: [
          {
            q: "Which of these is a civic responsibility, not just a right?",
            options: ["Free speech", "Voting", "Paying taxes", "Owning property"],
            correct: 2,
          },
          {
            q: "A citizen is best defined as:",
            options: [
              "Anyone visiting a country",
              "A recognized member of a state with rights and responsibilities",
              "Only someone born wealthy",
              "A government official",
            ],
            correct: 1,
          },
          {
            q: "Civic duty includes:",
            options: [
              "Ignoring local decisions",
              "Staying informed and participating in your community",
              "Avoiding all laws",
              "Never voting",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "the-constitution",
        title: "The Constitution",
        summary: "The rulebook for a country.",
        content:
          "A constitution is the supreme law of a country — it outlines how government is structured, what powers each branch has, and what rights citizens hold. It's called 'supreme' because any other law that conflicts with it can be struck down. Constitutions can be rigid (hard to change, requiring a special process) or flexible (changed more easily, like an ordinary law). Most modern democracies use a written constitution as their foundation.\n\nConstitutions typically cover a few recurring areas. They establish the structure of government, defining the powers and limits of the legislature, executive, and judiciary. They often include a bill of rights — a list of fundamental freedoms citizens are guaranteed, like freedom of speech, religion, and a fair trial, which the government itself cannot legally violate. They set out how leaders are chosen and for how long, and they establish the process for amending the constitution itself, usually requiring more than a simple majority to change, precisely because it's meant to be more stable than ordinary law. Not every country has a single written document — some, like the United Kingdom, rely on an 'unwritten' constitution built from a combination of laws, court rulings, and long-standing conventions rather than one central text, though the underlying idea (that government power has defined limits) still applies.",
        quiz: [
          {
            q: "A constitution is described as 'supreme' because:",
            options: [
              "It's the oldest law",
              "Other conflicting laws can be struck down because of it",
              "It's never written down",
              "Only the President can read it",
            ],
            correct: 1,
          },
          {
            q: "A 'rigid' constitution is one that:",
            options: [
              "Changes easily like an ordinary law",
              "Is hard to change, requiring a special process",
              "Has no rules at all",
              "Only applies to elections",
            ],
            correct: 1,
          },
          {
            q: "A constitution mainly outlines:",
            options: [
              "Sports rules",
              "How government is structured and what rights citizens hold",
              "Business tax rates only",
              "Weather patterns",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "political-parties-elections",
        title: "Political Parties and Elections",
        summary: "How people organize to seek power.",
        content:
          "A political party is a group of people who share similar views on how a country should be run, organizing together to win elections and shape policy. Elections let citizens choose their representatives, usually by voting for the candidate or party whose ideas they support. A healthy multi-party system offers voters real choice, while free and fair elections require secret ballots, independent oversight, and equal access for all candidates.\n\nElection systems vary in how votes translate into seats or power. In a first-past-the-post system, the candidate with the most votes in a constituency wins that seat outright, even without a full majority — simple to understand, but it can mean a party wins many seats with a minority of the overall national vote. In a proportional representation system, seats are allocated to parties roughly in proportion to the share of votes they receive nationally, giving smaller parties a fairer chance at representation. Political parties usually exist along a broad ideological spectrum — from those favoring more government intervention and social spending, to those favoring smaller government and free markets — though real parties often mix positions rather than fitting neatly into one label. Party manifestos (published policy plans) are meant to let voters compare what each party actually promises to do if elected, which is why reading beyond a candidate's personality or slogans matters for making an informed choice.",
        quiz: [
          {
            q: "A political party is best described as:",
            options: [
              "A single unelected ruler",
              "A group organizing around shared views to win elections",
              "A court of law",
              "A branch of the military",
            ],
            correct: 1,
          },
          {
            q: "Free and fair elections require:",
            options: [
              "Open, public ballots only",
              "Secret ballots and independent oversight",
              "Only one candidate allowed",
              "No campaigning at all",
            ],
            correct: 1,
          },
          {
            q: "A multi-party system mainly benefits voters by:",
            options: ["Removing elections", "Offering real choice", "Banning debate", "Reducing representation"],
            correct: 1,
          },
        ],
      },
      {
        id: "international-organizations",
        title: "International Organizations",
        summary: "Countries working together, like the UN and AU.",
        content:
          "Countries often join international organizations to cooperate on shared problems. The United Nations (UN) works on peace, security, and human rights across the world. The African Union (AU) focuses on unity, development, and peace specifically among African nations. These organizations can't force a country to act, but they create shared agreements, mediate disputes, and coordinate responses to problems too large for one country alone, like pandemics or climate change.\n\nThe UN itself is made up of several key bodies with different roles. The General Assembly gives every member country an equal vote on broad resolutions and discussions. The Security Council, with a smaller number of members including five permanent ones holding veto power, handles matters of international peace and security, and can authorize stronger action like sanctions or peacekeeping forces. Beyond the UN and AU, countries also join organizations focused on narrower goals — economic blocs like ECOWAS (Economic Community of West African States) aim to boost trade and cooperation among member nations, while organizations like the World Health Organization (WHO) focus specifically on global health issues. Membership in these organizations doesn't erase a country's own sovereignty (its right to govern itself), but it does mean agreeing to cooperate on certain shared rules and goals — a trade-off most nations accept because some problems genuinely can't be solved by any single country acting alone.",
        quiz: [
          {
            q: "The United Nations mainly focuses on:",
            options: ["Only trade deals", "Peace, security, and human rights globally", "Only sports events", "Only one country's laws"],
            correct: 1,
          },
          {
            q: "The African Union focuses on unity and development among:",
            options: ["European nations", "African nations", "Only Asian nations", "No specific region"],
            correct: 1,
          },
          {
            q: "International organizations mainly help countries by:",
            options: [
              "Forcing countries to obey orders",
              "Creating shared agreements and coordinating on large problems",
              "Replacing national governments",
              "Ignoring global issues",
            ],
            correct: 1,
          },
        ],
      },
    ],
  },
  {
    id: "crs",
    name: "CRS",
    color: "#C9A54A",
    icon: BookMarked,
    tagline: "Christian Religious Studies.",
    chapters: [
      {
        id: "parables-of-jesus",
        title: "Key Parables of Jesus",
        summary: "Simple stories, deeper lessons.",
        content:
          "A parable is a short story that teaches a moral or spiritual lesson through everyday imagery. In the Parable of the Sower, seed falls on different types of ground, showing how people receive teaching differently depending on their state of heart. In the Parable of the Good Samaritan, a stranger helps an injured man when others walk past, teaching that kindness has no boundary of tribe or background.\n\nAnother widely studied parable is the Prodigal Son, in which a younger son demands his inheritance early, wastes it, and returns home in shame — only to be welcomed back by his father with celebration rather than punishment, illustrating themes of forgiveness and unconditional love. Parables were a deliberate teaching method: by grounding a spiritual lesson in a familiar, everyday scene (farming, travel, family life), the story became memorable and accessible to ordinary listeners, not just religious scholars. Many parables also work on more than one level — the Good Samaritan, for instance, is often read both as a lesson about kindness across social divides and as a direct answer to the question 'who is my neighbor?' which prompted the story in the first place. Studying a parable well usually means asking not just 'what happens in the story,' but 'what question or situation was this story responding to,' since that context often unlocks the fuller meaning.",
        reference: "Parable of the Sower — Matthew 13:1-9; Parable of the Good Samaritan — Luke 10:25-37",
        quiz: [
          {
            q: "A parable is best described as:",
            options: [
              "A historical record",
              "A short story that teaches a lesson",
              "A song of praise",
              "A list of laws",
            ],
            correct: 1,
          },
          {
            q: "In the Parable of the Sower, the seed represents:",
            options: ["Money", "Teaching or the word", "Land ownership", "Rainfall"],
            correct: 1,
          },
          {
            q: "The Good Samaritan teaches that kindness:",
            options: [
              "Is only for family",
              "Has no boundary of tribe or background",
              "Must be repaid",
              "Is optional for the wealthy",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "ten-commandments",
        title: "The Ten Commandments",
        summary: "A foundation for moral living.",
        content:
          "The Ten Commandments were given to Moses on Mount Sinai and form a foundation for moral and spiritual living in the Christian faith. The first commandments guide a person's relationship with God — worship no other gods, do not misuse God's name. The rest guide relationships with others — honor your parents, do not steal, do not lie, do not covet what belongs to someone else. Together, they balance duty to God with duty to community.\n\nThe commandments are traditionally grouped into two broad sections, reflecting this balance. The first section (commandments about God) covers having no other gods, not making idols, not misusing God's name, and keeping the Sabbath day holy — establishing the proper relationship between a person and God. The second section (commandments about others) covers honoring parents, not murdering, not committing adultery, not stealing, not bearing false witness (lying about someone), and not coveting — establishing how people should treat one another in community. This structure reflects a broader theme found throughout the Bible: that love and duty toward God and love and duty toward other people are deeply connected, not separate categories. The commandments are often studied not just as a list of prohibitions, but as a framework for what a well-ordered, respectful community and relationship with God might look like.",
        reference: "Exodus 20:1-17; also recorded in Deuteronomy 5:6-21",
        quiz: [
          {
            q: "Where were the Ten Commandments given to Moses?",
            options: ["Mount Sinai", "The River Jordan", "Bethlehem", "Nazareth"],
            correct: 0,
          },
          {
            q: "The Ten Commandments guide relationships with:",
            options: [
              "Only God",
              "Only family",
              "Both God and others",
              "Neither God nor others",
            ],
            correct: 2,
          },
          {
            q: "Which of these is one of the Ten Commandments?",
            options: [
              "Do not steal",
              "Always travel far",
              "Collect wealth",
              "Avoid your neighbors",
            ],
            correct: 0,
          },
        ],
      },
      {
        id: "fruits-of-the-spirit",
        title: "Fruits of the Spirit",
        summary: "Character shaped from the inside out.",
        content:
          "The fruits of the Spirit describe the character that grows in a person living a Spirit-led life: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control. Unlike a single good deed, a 'fruit' suggests something that grows naturally over time, the way a tree produces fruit from its roots rather than by force. These qualities are meant to shape everyday behavior, not just religious occasions.\n\nThe fruits are often studied in contrast with what the same passage in Galatians calls 'works of the flesh' — behaviors like jealousy, anger, and selfish ambition, presented as the opposite pattern of character. This contrast underlines the core teaching: character isn't just about avoiding a list of bad actions, but about actively cultivating a different, deliberate way of living. The metaphor of 'fruit' also matters because a tree doesn't produce fruit overnight, and it doesn't produce fruit by simply trying harder in the moment — it's the outcome of the tree being well-rooted and consistently nourished over time. Applied to character, this suggests that qualities like patience or self-control aren't built through single dramatic efforts, but through steady, repeated practice, disposition, and — in the religious framing — reliance on the Spirit rather than willpower alone.",
        reference: "Galatians 5:22-23",
        quiz: [
          {
            q: "The fruits of the Spirit are best described as:",
            options: [
              "One-time good deeds",
              "Character that grows naturally over time",
              "Rules with punishments attached",
              "Rituals performed yearly",
            ],
            correct: 1,
          },
          {
            q: "Which of these is one of the fruits of the Spirit?",
            options: ["Pride", "Patience", "Envy", "Greed"],
            correct: 1,
          },
          {
            q: "The 'fruit' metaphor suggests these qualities:",
            options: [
              "Appear instantly by force",
              "Grow naturally, like fruit from a tree",
              "Are unrelated to daily life",
              "Only matter in church",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "life-of-moses",
        title: "The Life of Moses",
        summary: "From the river to the mountain.",
        content:
          "Moses was raised in the Egyptian palace but later led the Israelites out of slavery in Egypt, an event known as the Exodus. Along the way, he received the Ten Commandments from God on Mount Sinai, forming the moral and legal foundation for the Israelite people. His story is often studied as an example of leadership under pressure, and of guiding a community through a long, difficult journey toward a promised destination.\n\nMoses' story unfolds in recognizable stages worth knowing. He was born during a time when Israelite baby boys were under threat, hidden by his mother, and later found and raised by an Egyptian princess — growing up between two worlds. As an adult, he fled Egypt after defending an Israelite slave, spending years as a shepherd before being called by God, speaking through a burning bush, to return and demand the Israelites' freedom. The confrontation with Pharaoh that followed involved a series of plagues before the Israelites were finally released, crossing the Red Sea to escape pursuing soldiers. Even after receiving the Ten Commandments, Moses led the community through roughly 40 years of wandering before they reached the promised land — a period often studied as a lesson in perseverance, faith, and the difficulty of leading people through prolonged hardship without losing sight of the goal.",
        reference: "Exodus 2-14 (birth and the Exodus); Exodus 20 (the Ten Commandments)",
        quiz: [
          {
            q: "Moses is best known for leading the Israelites out of:",
            options: ["Babylon", "Egypt", "Rome", "Persia"],
            correct: 1,
          },
          {
            q: "This event is known as:",
            options: ["The Exodus", "The Flood", "The Ascension", "The Nativity"],
            correct: 0,
          },
          {
            q: "Moses received the Ten Commandments on:",
            options: ["Mount Sinai", "Mount Olives", "The River Nile", "Mount Ararat"],
            correct: 0,
          },
        ],
      },
      {
        id: "books-of-the-bible",
        title: "The Books of the Bible",
        summary: "How the Old and New Testament are organized.",
        content:
          "The Bible is divided into two main sections. The Old Testament covers the history, law, and prophecy of Israel before the birth of Jesus. The New Testament covers the life of Jesus (in the four Gospels), the early Christian church (Acts), letters to churches (Epistles), and prophecy (Revelation). Knowing this basic structure helps you find your way around the text and understand which part of the story a given passage belongs to.\n\nThe Old Testament itself is often grouped into further categories: the Law (or Pentateuch, the first five books, including Genesis and Exodus), historical books (recounting Israel's history), wisdom and poetry (like Psalms and Proverbs), and the Prophets (major and minor, depending on length), who often called the nation back to faithfulness and sometimes foretold future events. In the New Testament, the four Gospels — Matthew, Mark, Luke, and John — each tell the story of Jesus' life from a slightly different angle and audience, which is why studying them side by side often reveals details one account includes that another leaves out. The Epistles, mostly written by early leaders like Paul, address specific issues facing particular churches, meaning they're often best understood with some sense of who was writing to whom, and why. Recognizing which category a passage belongs to changes how you read it — a poetic Psalm expressing emotion reads differently from a historical account of a battle, even though both sit within the same overall Bible.",
        reference: "The Gospels — Matthew, Mark, Luke, John; Acts of the Apostles; Revelation (final book)",
        quiz: [
          {
            q: "The four Gospels are found in which section?",
            options: ["Old Testament", "New Testament", "Neither", "Both equally"],
            correct: 1,
          },
          {
            q: "The Old Testament mainly covers events:",
            options: [
              "After Jesus' birth only",
              "Before the birth of Jesus",
              "Only in modern times",
              "Outside of Israel's history",
            ],
            correct: 1,
          },
          {
            q: "Letters written to early churches are called:",
            options: ["Gospels", "Epistles", "Psalms", "Parables"],
            correct: 1,
          },
        ],
      },
      {
        id: "prayer-and-its-importance",
        title: "Prayer and Its Importance",
        summary: "Communication in the life of faith.",
        content:
          "Prayer is considered a way of communicating with God, expressed in different forms — thanksgiving (expressing gratitude), petition (asking for something needed), confession (acknowledging wrongdoing), and adoration (praising God). Across many traditions, prayer is seen as building and maintaining a relationship, not just a request system. Regular prayer is often described as a habit that shapes a person's character and outlook over time, similar to how consistent practice shapes any skill.\n\nThe Lord's Prayer, taught by Jesus as a model, is often studied closely because it touches on all these forms in a short, structured way: it opens with adoration ('hallowed be thy name'), includes petition for daily needs ('give us this day our daily bread'), includes a form of confession and reconciliation ('forgive us our trespasses, as we forgive those who trespass against us'), and closes acknowledging God's authority. This structure is often used as a template for personal prayer more broadly — beginning with acknowledgment of who God is, moving through personal need and honesty about wrongdoing, and closing with trust. Prayer is also commonly practiced both individually (private, personal reflection) and communally (as part of group worship), each serving a different but complementary role — private prayer often focuses on personal honesty and reflection, while communal prayer reinforces shared belief and mutual support within a community.",
        reference: "The Lord's Prayer — Matthew 6:9-13; on persistence in prayer — Luke 18:1-8",
        quiz: [
          {
            q: "A prayer of thanksgiving mainly expresses:",
            options: ["A complaint", "Gratitude", "A request for money", "Anger"],
            correct: 1,
          },
          {
            q: "Prayer is generally described as building:",
            options: ["A business deal", "A relationship with God", "A legal contract", "A public performance"],
            correct: 1,
          },
          {
            q: "Petition, as a form of prayer, mainly involves:",
            options: ["Praising only", "Asking for something needed", "Ignoring God", "Reading only"],
            correct: 1,
          },
        ],
      },
    ],
  },
  {
    id: "biology",
    name: "Biology",
    color: "#C1548C",
    icon: Microscope,
    tagline: "The study of living things.",
    chapters: [
      {
        id: "cell-structure",
        title: "Cell Structure and Function",
        summary: "The smallest unit of life.",
        content:
          "The cell is the basic unit of life — every living thing is made of one or more cells. Plant and animal cells share a nucleus (control center), cytoplasm (jelly-like fluid where reactions happen), and a cell membrane (the gatekeeper deciding what enters and leaves). Plant cells additionally have a rigid cell wall and chloroplasts, which is why plants can stand upright and make their own food from sunlight.\n\nA few more structures, called organelles, do specific jobs inside a cell. Mitochondria are often called the 'powerhouse' of the cell, releasing energy from food through respiration — cells that need lots of energy, like muscle cells, tend to have especially large numbers of them. Ribosomes build proteins, following instructions carried from the nucleus. The vacuole stores water, nutrients, and waste — in plant cells, one large central vacuole helps keep the cell firm and rigid by pressing outward against the cell wall. Organisms are also broadly divided by their cell type: eukaryotic cells (found in plants, animals, and fungi) have a nucleus enclosed in a membrane, while prokaryotic cells (found in bacteria) have no true nucleus, with their genetic material floating freely in the cytoplasm instead — a fundamental difference used to classify all living things into broad categories.",
        quiz: [
          {
            q: "The control center of a cell is the:",
            options: ["Cell wall", "Nucleus", "Cytoplasm", "Membrane"],
            correct: 1,
          },
          {
            q: "What do plant cells have that animal cells don't?",
            options: [
              "A nucleus",
              "Cytoplasm",
              "A cell wall and chloroplasts",
              "A membrane",
            ],
            correct: 2,
          },
          {
            q: "The cell membrane's main job is to:",
            options: [
              "Make food",
              "Control what enters and leaves the cell",
              "Store water only",
              "Produce sound",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "classification-living-things",
        title: "Classification of Living Things",
        summary: "Sorting life into groups.",
        content:
          "Scientists group living things by shared traits, from broad to specific: Kingdom, Phylum, Class, Order, Family, Genus, Species. All living things fall into major kingdoms, including Animalia (animals), Plantae (plants), and Fungi (mushrooms and molds). Two organisms in the same species can breed and produce fertile offspring — that's the clearest test of how closely related they are.\n\nBeyond Animalia, Plantae, and Fungi, two more kingdoms are commonly recognized: Protista (mostly single-celled organisms like amoeba, too varied to fit neatly elsewhere) and Monera (bacteria and other simple organisms without a true nucleus). Every organism also has a scientific name made of two parts — its genus and species — written in italics, like Homo sapiens for humans; this binomial (two-name) system, developed by Carl Linnaeus, gives every organism on Earth one universally recognized name regardless of language, avoiding the confusion of local common names that can vary from place to place. Moving down the classification levels — from Kingdom down to Species — each step groups organisms that are more and more closely related, which is why two organisms sharing the same Genus are far more similar than two organisms only sharing the same Kingdom. This system isn't just filing for its own sake; it reflects real evolutionary relationships between organisms.",
        quiz: [
          {
            q: "Which is the broadest classification group?",
            options: ["Species", "Genus", "Kingdom", "Family"],
            correct: 2,
          },
          {
            q: "Mushrooms and molds belong to which kingdom?",
            options: ["Animalia", "Plantae", "Fungi", "None"],
            correct: 2,
          },
          {
            q: "Two organisms of the same species can:",
            options: [
              "Never interact",
              "Breed and produce fertile offspring",
              "Only exist in captivity",
              "Belong to different kingdoms",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "photosynthesis",
        title: "Photosynthesis",
        summary: "How plants make their own food.",
        content:
          "Photosynthesis is how plants turn sunlight into food. Using chlorophyll in their leaves, plants take in carbon dioxide from the air and water from the soil, and with energy from sunlight, convert them into glucose (a sugar for energy) and oxygen. This is why plants release oxygen — it's a byproduct of making their own food, and it's also why nearly all life depends on plants, directly or indirectly.\n\nThe overall word equation is: carbon dioxide + water (+ light energy) → glucose + oxygen — and it happens mainly inside chloroplasts, organelles packed with chlorophyll found in leaf cells. A leaf's structure is well suited to this job: broad, flat surfaces maximize light capture, while tiny pores called stomata (mostly on the underside) let carbon dioxide in and oxygen out. Several factors can limit how fast photosynthesis happens, called limiting factors — light intensity, carbon dioxide concentration, and temperature all affect the rate, and whichever one is in shortest supply holds back the whole process, similar to how a chain is only as strong as its weakest link. Photosynthesis and respiration are often studied together as opposite processes: photosynthesis builds glucose and releases oxygen using light energy, while respiration (in both plants and animals) breaks glucose back down and releases energy, consuming oxygen and producing carbon dioxide — together, they form much of the cycle that keeps oxygen and carbon dioxide balanced in the atmosphere.",
        quiz: [
          {
            q: "What pigment allows plants to capture sunlight?",
            options: ["Melanin", "Chlorophyll", "Keratin", "Hemoglobin"],
            correct: 1,
          },
          {
            q: "Photosynthesis produces glucose and:",
            options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Salt"],
            correct: 1,
          },
          {
            q: "The raw materials for photosynthesis are:",
            options: [
              "Oxygen and glucose",
              "Carbon dioxide and water",
              "Salt and sunlight",
              "Nitrogen and soil",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "human-digestive-system",
        title: "Human Digestive System",
        summary: "From mouth to nutrient absorption.",
        content:
          "Digestion breaks food down into nutrients the body can use. It starts in the mouth, where chewing and saliva begin breaking food apart. The stomach uses acid and muscular churning to break it down further. Most nutrient absorption happens in the small intestine, where nutrients pass into the bloodstream through its highly folded, finger-like lining. The large intestine absorbs remaining water before waste leaves the body.\n\nDigestion involves two complementary processes throughout the journey: mechanical digestion (physically breaking food into smaller pieces — chewing, churning) and chemical digestion (breaking food down at the molecular level using enzymes). Enzymes are specialized proteins that speed up digestion of specific nutrients — amylase (found in saliva) starts breaking down starches, pepsin (in the stomach) breaks down proteins, and further enzymes from the pancreas continue breaking down fats, proteins, and carbohydrates once food reaches the small intestine. The liver also plays a supporting role, producing bile that helps break large fat globules into smaller ones, making them easier for enzymes to act on. The small intestine's inner lining is covered in tiny finger-like projections called villi, which dramatically increase its surface area — this is precisely what allows so much nutrient absorption to happen efficiently in a relatively short length of intestine.",
        quiz: [
          {
            q: "Digestion begins in the:",
            options: ["Stomach", "Mouth", "Large intestine", "Liver"],
            correct: 1,
          },
          {
            q: "Most nutrient absorption happens in the:",
            options: ["Stomach", "Large intestine", "Small intestine", "Mouth"],
            correct: 2,
          },
          {
            q: "The large intestine's main remaining job is to:",
            options: ["Digest fat", "Absorb remaining water", "Produce saliva", "Break down protein"],
            correct: 1,
          },
        ],
      },
      {
        id: "reproduction-in-plants",
        title: "Reproduction in Plants",
        summary: "Pollination, fertilization, and seeds.",
        content:
          "Many plants reproduce through flowers. Pollen from the male part (the anther) must reach the female part (the stigma) of a flower — a process called pollination, often carried out by wind, insects, or birds. Once pollen reaches the stigma, fertilization occurs, and the flower develops into a fruit containing seeds. Each seed can grow into a new plant, continuing the cycle.\n\nA flower's structure is built specifically for this purpose. The anther, sitting atop the stamen, produces pollen (the male reproductive cells). The stigma, at the top of the carpel, receives that pollen; below it, the ovary contains ovules, which become seeds after fertilization. Flowers that rely on insects for pollination are often brightly colored and scented, with nectar as a reward — an evolved strategy to attract pollinators, while wind-pollinated flowers tend to be small, dull-colored, and produce far more pollen to compensate for how much gets lost to chance. Once a seed forms, it needs the right conditions to germinate (begin growing into a new plant) — generally water, oxygen, and a suitable temperature — after which it uses its own stored food reserves to grow its first root and shoot, before it's able to photosynthesize on its own and become self-sufficient.",
        quiz: [
          {
            q: "Pollination is the transfer of pollen from the anther to the:",
            options: ["Root", "Stigma", "Leaf", "Stem"],
            correct: 1,
          },
          {
            q: "Which of these commonly carries out pollination?",
            options: ["Insects", "Rocks", "Soil pH", "Moonlight"],
            correct: 0,
          },
          {
            q: "After fertilization, a flower typically develops into a:",
            options: ["Root", "Fruit containing seeds", "New flower instantly", "Leaf"],
            correct: 1,
          },
        ],
      },
      {
        id: "ecosystems-food-chains",
        title: "Ecosystems and Food Chains",
        summary: "Who eats whom, and how energy flows.",
        content:
          "An ecosystem is a community of living things interacting with each other and their environment. A food chain shows how energy moves through it: producers (plants) make their own food from sunlight, primary consumers (herbivores) eat producers, and secondary consumers (carnivores or omnivores) eat other consumers. Decomposers break down dead matter, returning nutrients to the soil so producers can use them again — closing the cycle.\n\nReal ecosystems are rarely a single straight chain — they're better represented by a food web, showing how multiple food chains overlap and interconnect, since most animals eat more than one type of food and are eaten by more than one predator. Energy decreases at each step of a food chain — typically only around 10% of the energy at one level transfers usefully to the next, with the rest lost mainly as heat through the organisms' own life processes. This is why food chains rarely have more than four or five levels, and why there are always far more producers than top predators in a healthy ecosystem — there simply isn't enough energy left by the top to support large numbers there. Removing or disrupting even one species from an ecosystem can ripple outward through the whole web, since organisms depend on each other in more ways than a simple straight-line food chain diagram can fully show.",
        quiz: [
          {
            q: "In a food chain, producers are typically:",
            options: ["Carnivores", "Plants that make their own food", "Decomposers", "Rocks"],
            correct: 1,
          },
          {
            q: "An animal that eats only plants is called a:",
            options: ["Carnivore", "Herbivore", "Decomposer", "Producer"],
            correct: 1,
          },
          {
            q: "Decomposers mainly help an ecosystem by:",
            options: [
              "Eating other animals",
              "Breaking down dead matter and returning nutrients to soil",
              "Making their own food from sunlight",
              "Preventing all growth",
            ],
            correct: 1,
          },
        ],
      },
    ],
  },
];

function SpineCard({ subject, onClick, doneCount }) {
  const Icon = subject.icon;
  return (
    <button
      onClick={onClick}
      className="group relative text-left rounded-lg overflow-hidden transition-transform duration-200 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{
        backgroundColor: subject.color,
        boxShadow: "0 1px 0 rgba(0,0,0,0.15), 0 8px 16px -8px rgba(0,0,0,0.35)",
      }}
    >
      <div className="p-5 h-40 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div
            className="inline-flex w-9 h-9 items-center justify-center rounded-md"
            style={{ backgroundColor: "rgba(255,255,255,0.22)" }}
          >
            <Icon size={18} color="#fff" strokeWidth={2} />
          </div>
          {doneCount > 0 && (
            <span
              className="text-[11px] px-2 py-0.5 rounded-full font-medium"
              style={{ backgroundColor: "rgba(255,255,255,0.9)", color: subject.color }}
            >
              {doneCount}/{subject.chapters.length}
            </span>
          )}
        </div>
        <div>
          <div
            className="inline-block px-2 py-1 -rotate-2 text-base leading-none rounded-sm"
            style={{
              backgroundColor: "rgba(255,255,255,0.92)",
              color: COLORS.ink,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {subject.name}
          </div>
          <p className="mt-2 text-xs" style={{ color: "rgba(255,255,255,0.85)" }}>
            {subject.tagline}
          </p>
        </div>
      </div>
    </button>
  );
}

function Header({ onHome, onSignIn, user, onSignOut }) {
  return (
    <header
      className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-10 py-4"
      style={{ backgroundColor: COLORS.green }}
    >
      <button
        onClick={onHome}
        className="text-xl md:text-2xl font-extrabold tracking-tight"
        style={{ color: COLORS.paper, fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Formroom
      </button>
      <div className="flex items-center gap-4">
        <span
          className="text-xs uppercase tracking-widest hidden sm:block"
          style={{ color: "rgba(250,247,240,0.6)", fontFamily: "'JetBrains Mono', monospace" }}
        >
          8 subjects · lessons + quizzes
        </span>
        {user ? (
          <button
            onClick={onSignOut}
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.14)", color: COLORS.paper }}
            title="Click to sign out"
          >
            <User size={13} /> {user.displayName || user.email}
          </button>
        ) : (
          <button
            onClick={onSignIn}
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.14)", color: COLORS.paper }}
          >
            <User size={13} /> Sign in
          </button>
        )}
      </div>
    </header>
  );
}

function SignInModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleGoogle = async () => {
    setStatus("sending");
    setErrorMsg("");
    try {
      await signInWithGoogle();
      onClose(); // watchAuthState in App will pick up the signed-in user
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Google sign-in failed. Please try again.");
    }
  };

  const handleEmailLink = async () => {
    setStatus("sending");
    setErrorMsg("");
    try {
      await sendLoginLink(email);
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Could not send the link. Please try again.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(27,42,74,0.55)" }}
    >
      <div
        className="w-full max-w-sm rounded-lg p-6"
        style={{ backgroundColor: COLORS.paper }}
      >
        <div className="flex items-center justify-between mb-5">
          <h2
            className="text-lg font-extrabold"
            style={{ color: COLORS.ink, fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Sign in to Formroom
          </h2>
          <button onClick={onClose} style={{ color: COLORS.slate }}>
            <X size={18} />
          </button>
        </div>

        {status === "sent" ? (
          <p className="text-sm leading-relaxed" style={{ color: COLORS.ink }}>
            Check <strong>{email}</strong> for a sign-in link. Open it on this
            device to finish signing in.
          </p>
        ) : (
          <>
            <button
              onClick={handleGoogle}
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-medium mb-3 disabled:opacity-60"
              style={{ backgroundColor: "#fff", color: COLORS.ink, border: `1px solid ${COLORS.paperDark}` }}
            >
              <svg width="16" height="16" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l6-6C34.5 5.5 29.5 3.5 24 3.5 12.7 3.5 3.5 12.7 3.5 24S12.7 44.5 24 44.5 44.5 35.3 44.5 24c0-1.2-.1-2.4-.9-3.5z"/>
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 19 13.5 24 13.5c3.1 0 5.8 1.1 8 3l6-6C34.5 6.5 29.5 4.5 24 4.5c-7.6 0-14.1 4.3-17.4 10.6z"/>
                <path fill="#4CAF50" d="M24 44.5c5.4 0 10.2-1.8 13.9-5l-6.4-5.4c-2 1.4-4.6 2.4-7.5 2.4-5.3 0-9.7-3.1-11.4-7.5l-6.5 5C9.8 40.1 16.4 44.5 24 44.5z"/>
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.6l6.4 5.4C40.9 36.5 44 30.9 44 24c0-1.2-.1-2.4-.4-3.5z"/>
              </svg>
              {status === "sending" ? "Opening Google…" : "Continue with Google"}
            </button>

            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px" style={{ backgroundColor: COLORS.paperDark }} />
              <span className="text-xs" style={{ color: COLORS.slate }}>or</span>
              <div className="flex-1 h-px" style={{ backgroundColor: COLORS.paperDark }} />
            </div>

            <div className="flex items-center gap-2 mb-3 px-3 py-2.5 rounded-md" style={{ backgroundColor: COLORS.paperDark }}>
              <Mail size={16} color={COLORS.slate} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 bg-transparent outline-none text-sm"
                style={{ color: COLORS.ink }}
              />
            </div>
            <button
              onClick={handleEmailLink}
              disabled={!email || status === "sending"}
              className="w-full py-2.5 rounded-md text-sm font-semibold disabled:opacity-40"
              style={{ backgroundColor: COLORS.green, color: COLORS.paper }}
            >
              {status === "sending" ? "Sending…" : "Email me a sign-in link"}
            </button>

            {status === "error" && (
              <p className="text-xs mt-3" style={{ color: "#B5473A" }}>
                {errorMsg}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function LandingView({ onEnter }) {
  const totalChapters = SUBJECTS.reduce((sum, s) => sum + s.chapters.length, 0);
  const totalQuestions = SUBJECTS.reduce(
    (sum, s) => sum + s.chapters.reduce((c, ch) => c + ch.quiz.length, 0),
    0
  );

  return (
    <div style={{ backgroundColor: COLORS.paper }}>
      <section
        className="px-6 md:px-10 pt-20 pb-24 flex flex-col items-start"
        style={{ backgroundColor: COLORS.green }}
      >
        <span
          className="text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-6"
          style={{ backgroundColor: "rgba(255,255,255,0.14)", color: COLORS.yellow, fontFamily: "'JetBrains Mono', monospace" }}
        >
          Free · No account needed
        </span>
        <h1
          className="max-w-2xl text-4xl md:text-6xl font-extrabold leading-[1.05]"
          style={{ color: COLORS.paper, fontFamily: "'Space Grotesk', sans-serif" }}
        >
          A quiet corner of the internet, just for studying.
        </h1>
        <p className="max-w-xl mt-6 text-base md:text-lg" style={{ color: "rgba(250,247,240,0.8)" }}>
          Formroom is a free study site for secondary school students. Pick a
          subject, read a short lesson, then take a quick quiz to check it
          actually stuck — before you move on to the next one.
        </p>
        <button
          onClick={onEnter}
          className="mt-9 px-7 py-3.5 rounded-md text-sm font-semibold"
          style={{ backgroundColor: COLORS.yellow, color: COLORS.ink }}
        >
          Enter Formroom →
        </button>
        <div className="flex flex-wrap gap-x-8 gap-y-2 mt-10 text-sm" style={{ color: "rgba(250,247,240,0.65)" }}>
          <span>{SUBJECTS.length} subjects</span>
          <span>{totalChapters} lessons</span>
          <span>{totalQuestions} quiz questions</span>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 max-w-4xl">
        <h2
          className="text-2xl md:text-3xl font-extrabold mb-8"
          style={{ color: COLORS.ink, fontFamily: "'Space Grotesk', sans-serif" }}
        >
          How it works
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              title: "1. Pick a subject",
              body: "Maths, English, Chemistry, Physics, Art, Government, CRS, or Biology — start wherever you need the most help.",
            },
            {
              icon: ClipboardCheck,
              title: "2. Read a short lesson",
              body: "Each lesson is written to be read in a few minutes, with plain explanations and worked examples where it helps.",
            },
            {
              icon: Repeat,
              title: "3. Take the quiz",
              body: "A short quiz right after each lesson checks whether it actually sank in, with instant feedback on every answer.",
            },
          ].map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="p-5 rounded-lg" style={{ backgroundColor: COLORS.paperDark }}>
                <Icon size={20} color={COLORS.green} />
                <h3 className="font-semibold mt-3" style={{ color: COLORS.ink }}>
                  {step.title}
                </h3>
                <p className="text-sm mt-2" style={{ color: COLORS.slate }}>
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 max-w-4xl">
        <h2
          className="text-2xl md:text-3xl font-extrabold mb-6"
          style={{ color: COLORS.ink, fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Why this approach
        </h2>
        <p className="max-w-2xl leading-relaxed" style={{ color: COLORS.ink }}>
          Formroom is built around a well-studied idea in learning research
          called the <strong>testing effect</strong>: actively quizzing
          yourself on material helps it stick far better than re-reading
          notes alone. That's why every lesson here ends with a quiz instead
          of just a "next" button.
        </p>
        <div
          className="mt-6 max-w-2xl flex items-start gap-3 p-4 rounded-lg"
          style={{ backgroundColor: COLORS.paperDark }}
        >
          <Save size={18} color={COLORS.green} className="mt-0.5 shrink-0" />
          <p className="text-sm" style={{ color: COLORS.slate }}>
            Formroom is new, so we don't have long-term results to show yet —
            but your own progress is saved automatically as you go, so you can
            track how you're doing over time.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20">
        <button
          onClick={onEnter}
          className="px-7 py-3.5 rounded-md text-sm font-semibold"
          style={{ backgroundColor: COLORS.green, color: COLORS.paper }}
        >
          Enter Formroom →
        </button>
      </section>
    </div>
  );
}

function HomeView({ onSelectSubject, progress }) {
  return (
    <div>
      <section
        className="px-6 md:px-10 pt-16 pb-20"
        style={{ backgroundColor: COLORS.green }}
      >
        <h1
          className="max-w-2xl text-4xl md:text-6xl font-extrabold leading-[1.05]"
          style={{ color: COLORS.paper, fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Pick a subject.
          <br />
          Let's start a lesson.
        </h1>
        <p
          className="max-w-md mt-5 text-base md:text-lg"
          style={{ color: "rgba(250,247,240,0.75)" }}
        >
          Eight core subjects, short lessons, and a quiz at the end of each one
          — so you know it stuck before you move on.
        </p>
      </section>

      <section className="px-6 md:px-10 -mt-10 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl">
          {SUBJECTS.map((s) => {
            const doneCount = s.chapters.filter((ch) => progress[ch.id]).length;
            return (
              <SpineCard
                key={s.id}
                subject={s}
                doneCount={doneCount}
                onClick={() => onSelectSubject(s)}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

function SubjectView({ subject, onBack, onSelectLesson, progress }) {
  const Icon = subject.icon;
  return (
    <div>
      <section className="px-6 md:px-10 pt-10 pb-14" style={{ backgroundColor: subject.color }}>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm mb-8"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          <ArrowLeft size={16} /> All subjects
        </button>
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-md flex items-center justify-center"
            style={{ backgroundColor: "rgba(255,255,255,0.22)" }}
          >
            <Icon size={22} color="#fff" />
          </div>
          <div>
            <h1
              className="text-3xl md:text-4xl font-extrabold"
              style={{ color: "#fff", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {subject.name}
            </h1>
            <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.85)" }}>
              {subject.tagline}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-10 max-w-2xl">
        <p
          className="text-xs uppercase tracking-widest mb-4"
          style={{ color: COLORS.slate, fontFamily: "'JetBrains Mono', monospace" }}
        >
          {subject.chapters.filter((ch) => progress[ch.id]).length} of{" "}
          {subject.chapters.length} chapters completed
        </p>
        <div className="flex flex-col gap-3">
          {subject.chapters.map((ch, i) => {
            const done = progress[ch.id];
            return (
              <button
                key={ch.id}
                onClick={() => onSelectLesson(ch)}
                className="text-left rounded-lg p-5 flex items-center justify-between gap-4 transition-colors"
                style={{ backgroundColor: COLORS.paperDark }}
              >
                <div>
                  <h3 className="font-semibold flex items-center gap-2" style={{ color: COLORS.ink }}>
                    {i + 1}. {ch.title}
                    {done && <CircleCheck size={16} color={subject.color} />}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: COLORS.slate }}>
                    {done ? `Scored ${done.score}/${done.total} — ` : ""}
                    {ch.summary}
                  </p>
                </div>
                <span
                  className="shrink-0 text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: subject.color, color: "#fff" }}
                >
                  {done ? "Review" : "Start"}
                </span>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function LessonView({ subject, chapter, onBack, savedResult, onComplete }) {
  const [answers, setAnswers] = useState(
    savedResult?.answers || Array(chapter.quiz.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(!!savedResult);
  const [saving, setSaving] = useState(false);

  const score = answers.filter((a, i) => a === chapter.quiz[i].correct).length;

  const selectAnswer = (qIndex, optIndex) => {
    if (submitted) return;
    const next = [...answers];
    next[qIndex] = optIndex;
    setAnswers(next);
  };

  const checkAnswers = async () => {
    setSubmitted(true);
    setSaving(true);
    await onComplete(chapter.id, { score, total: chapter.quiz.length, answers });
    setSaving(false);
  };

  const allAnswered = answers.every((a) => a !== null);

  return (
    <div>
      <section className="px-6 md:px-10 pt-10 pb-8" style={{ backgroundColor: subject.color }}>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm mb-6"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          <ArrowLeft size={16} /> {subject.name}
        </button>
        <h1
          className="text-2xl md:text-3xl font-extrabold max-w-xl"
          style={{ color: "#fff", fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {chapter.title}
        </h1>
      </section>

      <section className="px-6 md:px-10 py-10 max-w-2xl">
        <div className="flex flex-col gap-4">
          {chapter.content.split("\n\n").map((para, i) => (
            <p key={i} className="leading-relaxed" style={{ color: COLORS.ink }}>
              {para}
            </p>
          ))}
        </div>

        {chapter.examples && chapter.examples.length > 0 && (
          <div className="mt-6">
            <h3
              className="text-sm font-semibold uppercase tracking-wide mb-3"
              style={{ color: subject.color, fontFamily: "'JetBrains Mono', monospace" }}
            >
              Worked examples
            </h3>
            <div className="flex flex-col gap-3">
              {chapter.examples.map((ex, i) => (
                <div key={i} className="p-4 rounded-md text-sm leading-relaxed" style={{ backgroundColor: COLORS.paperDark, color: COLORS.ink }}>
                  {ex}
                </div>
              ))}
            </div>
          </div>
        )}

        {chapter.reference && (
          <div className="mt-6 flex items-start gap-2">
            <BookMarked size={16} color={subject.color} className="mt-0.5 shrink-0" />
            <p className="text-sm italic" style={{ color: COLORS.slate }}>
              Scripture reference: {chapter.reference}
            </p>
          </div>
        )}

        <div className="mt-12">
          <h2
            className="text-lg font-semibold mb-5"
            style={{ color: COLORS.ink, fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Quick check
          </h2>

          <div className="flex flex-col gap-8">
            {chapter.quiz.map((item, qi) => (
              <div key={qi}>
                <p className="font-medium mb-3" style={{ color: COLORS.ink }}>
                  {qi + 1}. {item.q}
                </p>
                <div className="flex flex-col gap-2">
                  {item.options.map((opt, oi) => {
                    const isSelected = answers[qi] === oi;
                    const isCorrect = oi === item.correct;
                    let bg = COLORS.paperDark;
                    let border = "transparent";
                    if (submitted && isSelected && isCorrect) border = "#2E9C8F";
                    if (submitted && isSelected && !isCorrect) border = "#B5473A";
                    if (submitted && !isSelected && isCorrect) border = "#2E9C8F";
                    return (
                      <button
                        key={oi}
                        onClick={() => selectAnswer(qi, oi)}
                        className="text-left px-4 py-3 rounded-md text-sm flex items-center justify-between border-2 transition-colors"
                        style={{
                          backgroundColor: isSelected ? "#fff" : bg,
                          borderColor: border,
                          color: COLORS.ink,
                        }}
                      >
                        <span>{opt}</span>
                        {submitted && isSelected && isCorrect && (
                          <Check size={16} color="#2E9C8F" />
                        )}
                        {submitted && isSelected && !isCorrect && (
                          <X size={16} color="#B5473A" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {!submitted ? (
            <button
              onClick={checkAnswers}
              disabled={!allAnswered}
              className="mt-8 px-6 py-3 rounded-md text-sm font-semibold disabled:opacity-40"
              style={{ backgroundColor: COLORS.green, color: COLORS.paper }}
            >
              Check answers
            </button>
          ) : (
            <div
              className="mt-8 p-5 rounded-lg flex items-center gap-3"
              style={{ backgroundColor: COLORS.paperDark }}
            >
              <CircleCheck size={22} color={COLORS.green} />
              <p style={{ color: COLORS.ink }}>
                You got <strong>{score}</strong> out of{" "}
                <strong>{chapter.quiz.length}</strong> right.{" "}
                {saving ? "Saving…" : "This is saved to your progress."}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState("landing");
  const [subject, setSubject] = useState(null);
  const [chapter, setChapter] = useState(null);
  // progress lives here, one entry per chapter id: { score, total, answers }
  const [progress, setProgress] = useState({});
  const [loadingProgress, setLoadingProgress] = useState(true);
  const [signInOpen, setSignInOpen] = useState(false);
  const [user, setUser] = useState(null);

  // If this page load is someone clicking a sign-in link from their email,
  // finish that sign-in automatically. Then keep "user" in sync with
  // whatever Firebase reports as the current signed-in account (or null).
  useEffect(() => {
    completeLoginIfEmailLink().catch((e) => {
      console.error("Email link sign-in failed:", e);
    });
    const unsubscribe = watchAuthState((firebaseUser) => setUser(firebaseUser));
    return unsubscribe;
  }, []);

  // On first load, check localStorage for anything saved from a previous visit.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("formroomProgress");
      if (saved) {
        setProgress(JSON.parse(saved));
      }
    } catch (e) {
      // No saved progress yet — that's expected on a first visit.
    } finally {
      setLoadingProgress(false);
    }
  }, []);

  // Called by LessonView once a quiz is checked. Updates state immediately
  // (so the UI feels instant) and writes the whole progress object to storage.
  const saveChapterProgress = (chapterId, result) => {
    const next = { ...progress, [chapterId]: result };
    setProgress(next);
    try {
      window.localStorage.setItem("formroomProgress", JSON.stringify(next));
    } catch (e) {
      console.error("Could not save progress:", e);
    }
  };

  return (
    <div style={{ backgroundColor: COLORS.paper, minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <style>{FONTS}</style>
      {view !== "landing" && (
        <Header
          onHome={() => {
            setView("home");
            setSubject(null);
            setChapter(null);
          }}
          onSignIn={() => setSignInOpen(true)}
          user={user}
          onSignOut={() => signOutUser().catch((e) => console.error(e))}
        />
      )}
      {signInOpen && <SignInModal onClose={() => setSignInOpen(false)} />}
      {view === "landing" ? (
        <LandingView onEnter={() => setView("home")} />
      ) : loadingProgress ? (
        <p className="px-6 md:px-10 py-10 text-sm" style={{ color: COLORS.slate }}>
          Loading your progress…
        </p>
      ) : (
        <>
          {view === "home" && (
            <HomeView
              progress={progress}
              onSelectSubject={(s) => {
                setSubject(s);
                setView("subject");
              }}
            />
          )}
          {view === "subject" && subject && (
            <SubjectView
              subject={subject}
              progress={progress}
              onBack={() => setView("home")}
              onSelectLesson={(ch) => {
                setChapter(ch);
                setView("lesson");
              }}
            />
          )}
          {view === "lesson" && subject && chapter && (
            <LessonView
              subject={subject}
              chapter={chapter}
              savedResult={progress[chapter.id]}
              onComplete={saveChapterProgress}
              onBack={() => setView("subject")}
            />
          )}
        </>
      )}
    </div>
  );
}
