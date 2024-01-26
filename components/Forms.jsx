import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ResultsScreen from '../components/ResultsScreen';
import '../components/Forms.css';

function LinkedExample() {
  const actorData = [
    { id: 1, name: 'BRADLEY COOPER - Maestro', role: 'ACTOR IN A LEADING ROLE' },
    { id: 2, name: 'COLMAN DOMINGO - Rustin', role: 'ACTOR IN A LEADING ROLE' },
    { id: 3, name: 'PAUL GIAMATTI - The Holdovers', role: 'ACTOR IN A LEADING ROLE' },
    { id: 4, name: 'CILLIAN MURPHY - Oppenheimer', role: 'ACTOR IN A LEADING ROLE' },
    { id: 5, name: 'JEFFREY WRIGHT - American Fiction', role: 'ACTOR IN A LEADING ROLE' },
    { id: 6, name: 'STERLING K. BROWN - American Fiction', role: 'ACTOR IN A SUPPORTING ROLE' },
    { id: 7, name: 'ROBERT DE NIRO - Killers of the Flower Moon', role: 'ACTOR IN A SUPPORTING ROLE' },
    { id: 8, name: 'ROBERT DOWNEY JR. - Oppenheimer', role: 'ACTOR IN A SUPPORTING ROLE' },
    { id: 9, name: 'RYAN GOSLING - Barbie', role: 'ACTOR IN A SUPPORTING ROLE' },
    { id: 10, name: 'MARK RUFFALO - Poor Things', role: 'ACTOR IN A SUPPORTING ROLE' },
    { id: 11, name: 'ANNETTE BENING - Nyad', role: 'ACTRESS IN A LEADING ROLE' },
    { id: 12, name: 'LILY GLADSTONE - Killers of the Flower Moon', role: 'ACTRESS IN A LEADING ROLE' },
    { id: 13, name: 'SANDRA HÜLLER - Anatomy of a Fall', role: 'ACTRESS IN A LEADING ROLE' },
    { id: 14, name: 'CAREY MULLIGAN - Maestro', role: 'ACTRESS IN A LEADING ROLE' },
    { id: 15, name: 'EMMA STONE - Poor Things', role: 'ACTRESS IN A LEADING ROLE' },
    { id: 16, name: 'EMILY BLUNT - Oppenheimer', role: 'ACTRESS IN A SUPPORTING ROLE' },
    { id: 17, name: 'DANIELLE BROOKS - The Color Purple', role: 'ACTRESS IN A SUPPORTING ROLE' },
    { id: 18, name: 'AMERICA FERRERA - Barbie', role: 'ACTRESS IN A SUPPORTING ROLE' },
    { id: 19, name: 'JODIE FOSTER - Nyad', role: 'ACTRESS IN A SUPPORTING ROLE' },
    { id: 20, name: 'DA\'VINE JOY RANDOLPH - The Holdovers', role: 'ACTRESS IN A SUPPORTING ROLE' },
    { id: 21, name: 'THE BOY AND THE HERON - Hayao Miyazaki and Toshio Suzuki', role: 'ANIMATED FEATURE FILM' },
  { id: 22, name: 'ELEMENTAL - Peter Sohn and Denise Ream', role: 'ANIMATED FEATURE FILM' },
  { id: 23, name: 'NIMONA - Nick Bruno, Troy Quane, Karen Ryan and Julie Zackary', role: 'ANIMATED FEATURE FILM' },
  { id: 24, name: 'ROBOT DREAMS - Pablo Berger, Ibon Cormenzana, Ignasi Estapé and Sandra Tapia Díaz', role: 'ANIMATED FEATURE FILM' },
  { id: 25, name: 'SPIDER-MAN: ACROSS THE SPIDER-VERSE - Kemp Powers, Justin K. Thompson, Phil Lord, Christopher Miller and Amy Pascal', role: 'ANIMATED FEATURE FILM' },
  { id: 26, name: 'EL CONDE - Edward Lachman', role: 'CINEMATOGRAPHY' },
  { id: 27, name: 'KILLERS OF THE FLOWER MOON - Rodrigo Prieto', role: 'CINEMATOGRAPHY' },
  { id: 28, name: 'MAESTRO - Matthew Libatique', role: 'CINEMATOGRAPHY' },
  { id: 29, name: 'OPPENHEIMER - Hoyte van Hoytema', role: 'CINEMATOGRAPHY' },
  { id: 30, name: 'POOR THINGS - Robbie Ryan', role: 'CINEMATOGRAPHY' },
  { id: 31, name: 'BARBIE - Jacqueline Durran', role: 'COSTUME DESIGN' },
  { id: 32, name: 'KILLERS OF THE FLOWER MOON - Jacqueline West', role: 'COSTUME DESIGN' },
  { id: 33, name: 'NAPOLEON - Janty Yates and Dave Crossman', role: 'COSTUME DESIGN' },
  { id: 34, name: 'OPPENHEIMER - Ellen Mirojnick', role: 'COSTUME DESIGN' },
  { id: 35, name: 'POOR THINGS - Holly Waddington', role: 'COSTUME DESIGN' },
  { id: 36, name: 'ANATOMY OF A FALL - Justine Triet', role: 'DIRECTING' },
  { id: 37, name: 'KILLERS OF THE FLOWER MOON - Martin Scorsese', role: 'DIRECTING' },
  { id: 38, name: 'OPPENHEIMER - Christopher Nolan', role: 'DIRECTING' },
  { id: 39, name: 'POOR THINGS - Yorgos Lanthimos', role: 'DIRECTING' },
  { id: 40, name: 'THE ZONE OF INTEREST - Jonathan Glazer', role: 'DIRECTING' },
  { id: 41, name: 'BOBI WINE: THE PEOPLE\'S PRESIDENT - Moses Bwayo, Christopher Sharp and John Battsek', role: 'DOCUMENTARY FEATURE FILM' },
  { id: 42, name: 'THE ETERNAL MEMORY - FOUR DAUGHTERS', role: 'DOCUMENTARY FEATURE FILM' },
  { id: 43, name: 'Kaouther Ben Hania and Nadim Cheikhrouha - TO KILL A TIGER', role: 'DOCUMENTARY FEATURE FILM' },
  { id: 44, name: 'Nisha Pahuja, Cornelia Principe and David Oppenheim - 20 DAYS IN MARIUPOL', role: 'DOCUMENTARY FEATURE FILM' },
  { id: 45, name: 'THE ABCS OF BOOK BANNING - Sheila Nevins and Trish Adlesic', role: 'DOCUMENTARY SHORT FILM' },
  { id: 46, name: 'THE BARBER OF LITTLE ROCK - John Hoffman and Christine Turner', role: 'DOCUMENTARY SHORT FILM' },
  { id: 47, name: 'ISLAND IN BETWEEN - S. Leo Chiang and Jean Tsien', role: 'DOCUMENTARY SHORT FILM' },
  { id: 48, name: 'Ben Proudfoot and Kris Bowers - THE LAST REPAIR SHOP', role: 'DOCUMENTARY SHORT FILM' },
  { id: 49, name: 'Sean Wang and Sam Davis - NǍI NAI & WÀI PÓ', role: 'DOCUMENTARY SHORT FILM' },
  { id: 50, name: 'Laurent Sénéchal - ANATOMY OF A FALL', role: 'FILM EDITING' },
  { id: 51, name: 'Kevin Tent - THE HOLDOVERS', role: 'FILM EDITING' },
  { id: 52, name: 'Thelma Schoonmaker - KILLERS OF THE FLOWER MOON', role: 'FILM EDITING' },
  { id: 53, name: 'Jennifer Lame - OPPENHEIMER', role: 'FILM EDITING' },
  { id: 54, name: 'Yorgos Mavropsaridis - POOR THINGS', role: 'FILM EDITING' },
  { id: 55, name: 'IO CAPITANO - Italy', role: 'INTERNATIONAL FEATURE FILM' },
  { id: 56, name: 'PERFECT DAYS - Japan', role: 'INTERNATIONAL FEATURE FILM' },
  { id: 57, name: 'SOCIETY OF THE SNOW - Spain', role: 'INTERNATIONAL FEATURE FILM' },
  { id: 58, name: 'THE TEACHERS\' LOUNGE - Germany', role: 'INTERNATIONAL FEATURE FILM' },
  { id: 59, name: 'THE ZONE OF INTEREST - United Kingdom', role: 'INTERNATIONAL FEATURE FILM' },
  { id: 60, name: 'Karen Hartley Thomas, Suzi Battersby, Ashra Kelly-Blue - GOLDA', role: 'MAKEUP AND HAIRSTYLING' },
  { id: 61, name: 'Kazu Hiro, Kay Georgiou, Lori McCoy-Bell - MAESTRO', role: 'MAKEUP AND HAIRSTYLING' },
  { id: 62, name: 'Luisa Abel - OPPENHEIMER', role: 'MAKEUP AND HAIRSTYLING' },
  { id: 63, name: 'Nadia Stacey, Mark Coulier, Josh Weston - POOR THINGS', role: 'MAKEUP AND HAIRSTYLING' },
  { id: 64, name: 'Ana López-Puigcerver, David Martí, Montse Ribé - SOCIETY OF THE SNOW', role: 'MAKEUP AND HAIRSTYLING' },
  { id: 65, name: 'Laura Karpman - AMERICAN FICTION', role: 'MUSIC (ORIGINAL SCORE)' },
  { id: 66, name: 'John Williams - INDIANA JONES AND THE DIAL OF DESTINY', role: 'MUSIC (ORIGINAL SCORE)' },
  { id: 67, name: 'Robbie Robertson - KILLERS OF THE FLOWER MOON', role: 'MUSIC (ORIGINAL SCORE)' },
  { id: 68, name: 'Ludwig Göransson - OPPENHEIMER', role: 'MUSIC (ORIGINAL SCORE)' },
  { id: 69, name: 'Jerskin Fendrix - POOR THINGS', role: 'MUSIC (ORIGINAL SCORE)' },
  { id: 70, name: 'Diane Warren - THE FIRE INSIDE (from Flamin\' Hot)', role: 'MUSIC (ORIGINAL SONG)' },
  { id: 71, name: 'Mark Ronson, Andrew Wyatt - I\'M JUST KEN (from Barbie)', role: 'MUSIC (ORIGINAL SONG)' },
  { id: 72, name: 'Jon Batiste, Dan Wilson - IT NEVER WENT AWAY (from American Symphony)', role: 'MUSIC (ORIGINAL SONG)' },
  { id: 73, name: 'Scott George - WAHZHAZHE (A SONG FOR MY PEOPLE) (from Killers of the Flower Moon)', role: 'MUSIC (ORIGINAL SONG)' },
  { id: 74, name: 'Billie Eilish, Finneas O\'Connell - WHAT WAS I MADE FOR? (from Barbie)', role: 'MUSIC (ORIGINAL SONG)' },
  { id: 75, name: 'Ben LeClair, Nikos Karamigios, Cord Jefferson, Jermaine Johnson - AMERICAN FICTION', role: 'BEST PICTURE' },
  { id: 76, name: 'Marie-Ange Luciani, David Thion - ANATOMY OF A FALL', role: 'BEST PICTURE' },
  { id: 77, name: 'David Heyman, Margot Robbie, Tom Ackerley, Robbie Brenner - BARBIE', role: 'BEST PICTURE' },
  { id: 78, name: 'Mark Johnson - THE HOLDOVERS', role: 'BEST PICTURE' },
  { id: 79, name: 'Dan Friedkin, Bradley Thomas, Martin Scorsese, Daniel Lupi - KILLERS OF THE FLOWER MOON', role: 'BEST PICTURE' },
  { id: 80, name: 'Bradley Cooper, Steven Spielberg, Fred Berner, Amy Durning, Kristie Macosko Krieger - MAESTRO', role: 'BEST PICTURE' },
  { id: 81, name: 'Emma Thomas, Charles Roven, Christopher Nolan - OPPENHEIMER', role: 'BEST PICTURE' },
  { id: 82, name: 'David Hinojosa, Christine Vachon, Pamela Koffler - PAST LIVES', role: 'BEST PICTURE' },
  { id: 83, name: 'Ed Guiney, Andrew Lowe, Yorgos Lanthimos, Emma Stone - POOR THINGS', role: 'BEST PICTURE' },
  { id: 84, name: 'James Wilson - THE ZONE OF INTEREST', role: 'BEST PICTURE' },
  { id: 85, name: 'Sarah Greenwood, Katie Spencer - BARBIE', role: 'PRODUCTION DESIGN' },
  { id: 86, name: 'Jack Fisk, Adam Willis - KILLERS OF THE FLOWER MOON', role: 'PRODUCTION DESIGN' },
  { id: 87, name: 'Arthur Max, Elli Griff - NAPOLEON', role: 'PRODUCTION DESIGN' },
  { id: 88, name: 'Ruth De Jong, Claire Kaufman - OPPENHEIMER', role: 'PRODUCTION DESIGN' },
  { id: 89, name: 'James Price, Shona Heath, Zsuzsa Mihalek - POOR THINGS', role: 'PRODUCTION DESIGN' },
  { id: 90, name: 'Tal Kantor, Amit R. Gicelter - LETTER TO A PIG', role: 'ANIMATED SHORT FILM' },
  { id: 91, name: 'Jerusha Hess, Jared Hess - NINETY-FIVE SENSES', role: 'ANIMATED SHORT FILM' },
  { id: 92, name: 'Yegane Moghaddam - OUR UNIFORM', role: 'ANIMATED SHORT FILM' },
  { id: 93, name: 'Stéphanie Clément, Marc Rius - PACHYDERME', role: 'ANIMATED SHORT FILM' },
  { id: 94, name: 'Dave Mullins, Brad Booker - WAR IS OVER! INSPIRED BY THE MUSIC OF JOHN & YOKO', role: 'ANIMATED SHORT FILM' },
  { id: 95, name: 'Misan Harriman, Nicky Bentham - THE AFTER', role: 'LIVE ACTION SHORT FILM' },
  { id: 96, name: 'Vincent René-Lortie, Samuel Caron - INVINCIBLE', role: 'LIVE ACTION SHORT FILM' },
  { id: 97, name: 'Lasse Lyskjær Noer, Christian Norlyk - KNIGHT OF FORTUNE', role: 'LIVE ACTION SHORT FILM' },
  { id: 98, name: 'Nazrin Choudhury, Sara McFarlane - RED, WHITE AND BLUE', role: 'LIVE ACTION SHORT FILM' },
  { id: 99, name: 'Wes Anderson, Steven Rales - THE WONDERFUL STORY OF HENRY SUGAR', role: 'LIVE ACTION SHORT FILM' },
  { id: 100, name: 'Ian Voigt, Erik Aadahl, Ethan Van der Ryn, Tom Ozanich, Dean Zupancic - THE CREATOR', role: 'SOUND' },
  { id: 101, name: 'Steven A. Morrow, Richard King, Jason Ruder, Tom Ozanich, Dean Zupancic - MAESTRO', role: 'SOUND' },
  { id: 102, name: 'Chris Munro, James H. Mather, Chris Burdon, Mark Taylor - MISSION: IMPOSSIBLE - DEAD RECKONING PART ONE', role: 'SOUND' },
  { id: 103, name: 'Willie Burton, Richard King, Gary A. Rizzo, Kevin O\'Connell - OPPENHEIMER', role: 'SOUND' },
  { id: 104, name: 'Tarn Willers, Johnnie Burn - THE ZONE OF INTEREST', role: 'SOUND' },
  { id: 105, name: 'Jay Cooper, Ian Comley, Andrew Roberts, Neil Corbould - THE CREATOR', role: 'VISUAL EFFECTS' },
  { id: 106, name: 'Takashi Yamazaki, Kiyoko Shibuya, Masaki Takahashi, Tatsuji Nojima - GODZILLA MINUS ONE', role: 'VISUAL EFFECTS' },
  { id: 107, name: 'Stephane Ceretti, Alexis Wajsbrot, Guy Williams, Theo Bialek - GUARDIANS OF THE GALAXY VOL. 3', role: 'VISUAL EFFECTS' },
  { id: 108, name: 'Alex Wuttke, Simone Coco, Jeff Sutherland, Neil Corbould - MISSION: IMPOSSIBLE - DEAD RECKONING PART ONE', role: 'VISUAL EFFECTS' },
  { id: 109, name: 'Charley Henley, Luc-Ewen Martin-Fenouillet, Simone Coco, Neil Corbould - NAPOLEON', role: 'VISUAL EFFECTS' },
  { id: 110, name: 'Cord Jefferson - AMERICAN FICTION', role: 'WRITING (ADAPTED SCREENPLAY)' },
  { id: 111, name: 'Greta Gerwig, Noah Baumbach - BARBIE', role: 'WRITING (ADAPTED SCREENPLAY)' },
  { id: 112, name: 'Christopher Nolan - OPPENHEIMER', role: 'WRITING (ADAPTED SCREENPLAY)' },
  { id: 113, name: 'Tony McNamara - POOR THINGS', role: 'WRITING (ADAPTED SCREENPLAY)' },
  { id: 114, name: 'Jonathan Glazer - THE ZONE OF INTEREST', role: 'WRITING (ADAPTED SCREENPLAY)' },
  { id: 115, name: 'Justine Triet, Arthur Harari - ANATOMY OF A FALL', role: 'WRITING (ORIGINAL SCREENPLAY)' },
  { id: 116, name: 'David Hemingson - THE HOLDOVERS', role: 'WRITING (ORIGINAL SCREENPLAY)' },
  { id: 117, name: 'Bradley Cooper, Josh Singer - MAESTRO', role: 'WRITING (ORIGINAL SCREENPLAY)' },
  { id: 118, name: 'Samy Burch, Alex Mechanik - MAY DECEMBER', role: 'WRITING (ORIGINAL SCREENPLAY)' },
  { id: 119, name: 'Celine Song - PAST LIVES', role: 'WRITING (ORIGINAL SCREENPLAY)' },

  ];

  const categories = [
    'ACTOR IN A LEADING ROLE',
    'ACTOR IN A SUPPORTING ROLE',
    'ACTRESS IN A LEADING ROLE',
    'ACTRESS IN A SUPPORTING ROLE',
    'ANIMATED FEATURE FILM',
    'CINEMATOGRAPHY',
    'COSTUME DESIGN',
    'DIRECTING','DOCUMENTARY FEATURE FILM',
    'DOCUMENTARY SHORT FILM',
    'FILM EDITING',
    'INTERNATIONAL FEATURE FILM',
    'MAKEUP AND HAIRSTYLING',
    'MUSIC (ORIGINAL SCORE)',
    'MUSIC (ORIGINAL SONG)',
    'BEST PICTURE',
    'PRODUCTION DESIGN',
    'ANIMATED SHORT FILM',
    'LIVE ACTION SHORT FILM',
    'SOUND',
    'VISUAL EFFECTS',
    'WRITING (ADAPTED SCREENPLAY)',
    'WRITING (ORIGINAL SCREENPLAY)',
    
  ];
    
  const [displayResults, setDisplayResults] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [previousCategoryIndex, setPreviousCategoryIndex] = useState(null);
  

  useEffect(() => {
    localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
  }, [selectedOptions]);

  const handleRadioChange = (item) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [categories[currentCategoryIndex]]: item,
    }));
  };

  const isChecked = (item) => selectedOptions[categories[currentCategoryIndex]] === item;

  const handleButtonClick = () => {
    const currentCategory = categories[currentCategoryIndex];
    const selectedOption = selectedOptions[currentCategory];
  
    if (selectedOption) {
      if (currentCategoryIndex === categories.length - 1) {
        // If it's the last category, render the ResultsScreen component
        setDisplayResults(true);
      } else {
        setPreviousCategoryIndex(currentCategoryIndex);
        setCurrentCategoryIndex((prevIndex) => prevIndex + 1);
        setDisplayResults(false);
      }
    } else {
      // Show an alert or some indication that the user needs to select an option
      alert('Please select an option before proceeding.');
    }
  };
  
  const handlePreviousButtonClick = () => {
    if (previousCategoryIndex !== null) {
      setCurrentCategoryIndex(previousCategoryIndex);
      setPreviousCategoryIndex((prevIndex) => prevIndex - 1); // Update the previous index to go back
      setDisplayResults(false);
    }
  };

  const handleCategoryButtonClick = (index) => {
    if (index >= 0 && index < categories.length) {
      setCurrentCategoryIndex(index);
      setPreviousCategoryIndex(null);
      setDisplayResults(false);
    }
  };


  return (
    <div>
      {!displayResults && (
        <div>
          {categories[currentCategoryIndex] && (
            <>
              <h2> {categories[currentCategoryIndex].toUpperCase().replace('ROLE', ' ROLE')}</h2>
              <ListGroup>
                {actorData
                  .filter((actor) => actor.role === categories[currentCategoryIndex])
                  .map((actor) => (
                    <ListGroup.Item key={actor.id} action>
                      <label className="label-background">
                        <input
                          type="radio"
                          name={`${categories[currentCategoryIndex]}Group`}
                          checked={isChecked(actor.name)}
                          onChange={() => handleRadioChange(actor.name)}
                        />
                        {' '}
                        {actor.name}
                      </label>
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </>
          )}
          <div>
            {currentCategoryIndex !== 0 && (
              <Button onClick={handlePreviousButtonClick}>
                Previous
              </Button>
            )}
            <Button onClick={handleButtonClick}>
              {currentCategoryIndex === categories.length - 1 ? 'View Results' : 'Next'}
            </Button>
          </div>
        </div>
      )}
  
      {displayResults && <ResultsScreen selectedOptions={selectedOptions} categories={categories} />}
    </div>
  );
}

export default LinkedExample;