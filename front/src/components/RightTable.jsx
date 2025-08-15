import { useState } from 'react';

function RightTable() {
  const sections = [
    {  
      title: 'Section 1: Fundamentals',
      items: [
        'Digital Marketing Strategies',
        'Introduction to SEO',
        'Marketing Funnels Explained',
      ],
    },
    {
      title: 'Section 2: SEO Basics',
      items: [
        'Understanding Search Engines',
        'Keyword Research Techniques',
        'On-Page vs Off-Page SEO',
      ],
    },
    {
      title: 'Section 3: Content Strategy',
      items: [
        'Content Planning',
        'Blog Writing Best Practices',
        'Using AI in Content Creation',
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
  ];

  // Track checked state for each item using a nested array
  const [checkedItems, setCheckedItems] = useState(
    sections.map((section) => section.items.map(() => false))
  );

  // update check state 
  const handleCheckboxChange = (sectionIndex, itemIndex) => {
    const updated = [...checkedItems];
    updated[sectionIndex][itemIndex] = !updated[sectionIndex][itemIndex];
    setCheckedItems(updated);
  };

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="p-4 bg-white rounded shadow-md mt-11
                    w-full max-w-md 
                    mx-auto md:mx-0 ">
      <h2 className="text-xl font-bold mb-4 pb-0">Topics for this Course</h2>

      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-2 rounded">
          <button
            onClick={() => toggleSection(sectionIndex)}
            className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold"
          >
            {section.title}
          </button>

          {openSection === sectionIndex && (
            <ul className="px-6 py-2 bg-gray-50">
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex items-center space-x-2 py-1 text-gray-800"
                >
                  <input
                    type="checkbox"
                    className="accent-violet-500 cursor-pointer"
                    checked={checkedItems[sectionIndex][itemIndex]}
                    onChange={() =>
                      handleCheckboxChange(sectionIndex, itemIndex)
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
  );   
}

export default RightTable;



 


