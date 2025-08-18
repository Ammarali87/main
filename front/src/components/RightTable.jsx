import { useState } from 'react';
const weekData = [
  {
    title: 'Week 1–3',
    sections: [
      {
        title: 'Section 1: SpaceX Story',
        items: [
          'History of SpaceX',
          'Elon Musk’s Vision for Space Travel',
          'Major Milestones and Achievements',
        ],
      },
      {
        title: 'Section 2: Rockets & Technology',
        items: [
          'Falcon 9 vs Falcon Heavy',
          'Starship: Design and Goals',
          'Reusable Rocket Technology',
        ],
      },
      {
        title: 'Section 3: Missions & Impact',
        items: [
          'Crewed Missions (e.g., Crew Dragon)',
          'Commercial Satellite Launches',
          'Impact on Global Space Industry',
        ],
      },
      {
        title: 'Section 4: Assessment',
        items: ['Knowledge Check', 'Module Assessment'],
      },
      {
        title: 'Section 5: Quiz',
        items: ['Final Quiz'],
      },
    ],
  },
  {
    title: 'Week 4–6',
    sections: [
      {
        title: 'Section 6: AI ChatGpt',
        items: [
          'What is Artificial Intelligence?',
          'History & Evolution of AI',
          'Types of AI (Narrow vs General)',
        ],
      },
      {
        title: 'Section 7: AI Tools & Techniques',
        items: [
          'Machine Learning Basics',
          'Neural Networks Explained',
          'Natural Language Processing',
        ],
      },
      {
        title: 'Section 8: AI in Real Life',
        items: [
          'AI in Healthcare, Finance, and Transportation',
          'Ethics of AI and Bias',
          'The Future of AI & Human Collaboration',
        ],
      },
    ],
  },
];

function RightTable() {
  const [checkedItems, setCheckedItems] = useState(
    weekData.map(week => week.sections.map(section => section.items.map(() => false)))
  );

  const [openSection, setOpenSection] = useState({ week: null, section: null });

  const toggleSection = (weekIndex, sectionIndex) => {
    setOpenSection(prev =>
      prev.week === weekIndex && prev.section === sectionIndex
        ? { week: null, section: null }
        : { week: weekIndex, section: sectionIndex }
    );
  };

  const handleCheckboxChange = (weekIndex, sectionIndex, itemIndex) => {
    const updated = [...checkedItems];
    updated[weekIndex][sectionIndex][itemIndex] = !updated[weekIndex][sectionIndex][itemIndex];
    setCheckedItems(updated);
  };

  // ===== Progress Calculation =====
  const totalItems = checkedItems.flat(2).length;
  const checkedCount = checkedItems.flat(2).filter(Boolean).length;
  const progressPercent = Math.round((checkedCount / totalItems) * 100);

  return (
    <div className="p-4 bg-transparent/20 rounded shadow-md mt-11 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Topics for this Course</h2>

      {/* ==== Progress Bar ==== */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-medium text-violet-600">{progressPercent}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-violet-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {weekData.map((week, weekIndex) => (
        <div key={weekIndex} className="bg-white p-3 mb-6 rounded shadow">
          <h3 className="text-lg font-semibold mt-2 mb-2 text-violet-600">{week.title}</h3>

          {week.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-2 rounded">
              <button
                onClick={() => toggleSection(weekIndex, sectionIndex)}
                className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold"
              >
                {section.title}
              </button>

              {openSection.week === weekIndex && openSection.section === sectionIndex && (
                <ul className="px-6 py-2 bg-gray-50">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center space-x-2 py-1 text-gray-800"
                    >
                      <input
                        type="checkbox"
                        className="accent-violet-500 cursor-pointer"
                        checked={checkedItems[weekIndex][sectionIndex][itemIndex]}
                        onChange={() =>
                          handleCheckboxChange(weekIndex, sectionIndex, itemIndex)
                        }
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default RightTable;
