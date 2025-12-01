import React, { useState, useEffect } from 'react';
import SansSprite from '../assets/Sans_Sprite_Vector.png';

const Home: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // Use the image from assets (already provided by the user)
    const possiblePaths = [SansSprite];

    // Test that the image loads correctly
    const testImage = new Image();
    testImage.onload = () => {
      setImageSrc(possiblePaths[0]);
    };
    testImage.onerror = () => {
      console.error('Could not load image from assets');
      setImageError(true);
    };
    testImage.src = possiblePaths[0];
  }, []);
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">UNDERTALE</h1>
            <p className="hero-subtitle">The RPG game where nobody has to die</p>
          </div>
          <div className="hero-image">
            {!imageError && imageSrc ? (
              <img 
                src={imageSrc}
                alt="Sans from UNDERTALE" 
                className="sans-sprite"
                onError={() => setImageError(true)}
                onLoad={() => console.log('Image loaded successfully!')}
              />
            ) : (
              <div className="sans-placeholder">
                <div className="placeholder-text">
                  ★ SANS ★
                  <br />
                  <small>(Image loading...)</small>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="game-description">
          <h2>What is UNDERTALE?</h2>
          <p>
            UNDERTALE is a role-playing video game created by indie developer Toby Fox, released in 2015. 
            Set in the Underground, a large, secluded region under Earth's surface separated by a magic barrier, 
            the game follows a child who has fallen into the Underground and seeks to return to the surface.
          </p>

          <h3>★ Key Features</h3>
          <ul className="features-list">
            <li><strong>Unique Combat System:</strong> Players can choose to fight or spare monsters, with each choice affecting the story</li>
            <li><strong>Multiple Routes:</strong> Three main paths - Neutral, Pacifist, and Genocide - each with different endings</li>
            <li><strong>Memorable Characters:</strong> From Sans and Papyrus to Toriel and Undyne, each character is beloved by fans</li>
            <li><strong>Incredible Soundtrack:</strong> Composed by Toby Fox, featuring iconic tracks like "Megalovania" and "Hopes and Dreams"</li>
            <li><strong>Meta-Narrative:</strong> The game is aware of player choices and remembers actions across playthroughs</li>
          </ul>

          <h3>★ Story Overview</h3>
          <p>
            You play as a human child who falls into the Underground, a realm populated by monsters who were sealed away 
            after a war with humans. As you navigate through various areas like the Ruins, Snowdin, Waterfall, and Hotland, 
            you encounter monsters who may become friends or foes depending on your choices.
          </p>

          <p>
            The game's central theme revolves around <strong>DETERMINATION</strong> - the power to persist, to show mercy, 
            and to believe that even the most unlikely friendships are possible. Your choices throughout the journey 
            determine not just the ending, but how the entire story unfolds.
          </p>

          <h3>★ The Power of Choice: Multiple Endings</h3>
          <p>
            While many players experience UNDERTALE once and move on, the game is deliberately designed to reward 
            multiple playthroughs. Each route reveals different aspects of the story and characters, creating a 
            more complete understanding of the Underground's complex narrative.
          </p>

          <div className="endings-grid">
            <div className="ending-card neutral-ending">
              <h4>🌟 Neutral Route</h4>
              <p>
                Most players' first experience. There are actually <strong>multiple Neutral endings</strong> 
                depending on who you spare and who you fight. While satisfying, it often leaves questions 
                unanswered and hints that there might be a better way.
              </p>
            </div>

            <div className="ending-card pacifist-ending">
              <h4>💛 True Pacifist Route</h4>
              <p>
                The "golden ending" achieved by showing mercy to every monster and befriending key characters. 
                This route reveals the full backstory, the true villain, and provides the most hopeful conclusion. 
                <strong>Many consider this the "real" ending</strong> of UNDERTALE.
              </p>
            </div>

            <div className="ending-card genocide-ending">
              <h4>💀 Genocide Route</h4>
              <p>
                The darkest path, requiring the player to systematically eliminate every monster in each area. 
                This route fundamentally changes the game's tone, reveals hidden lore, and features some of the 
                most challenging battles. <strong>It permanently affects the game</strong>, even in future playthroughs.
              </p>
            </div>
          </div>

          <div className="replay-insight">
            <p>
              <strong>The Reality:</strong> While UNDERTALE encourages multiple playthroughs through its design, 
              most players (understandably) experience only one or two routes. However, those who do explore 
              all paths discover that UNDERTALE is essentially three different games in one - each route offers 
              unique dialogue, characters reactions, boss fights, and story revelations that can't be found elsewhere.
            </p>
            <p>
              This design choice makes the <strong>True Pacifist and Genocide routes particularly significant</strong> 
              in the community, as they represent the "complete" moral spectrum of the game and contain the most 
              memorable and impactful moments that define UNDERTALE's legacy.
            </p>
          </div>

          <h3>★ Impact & Legacy</h3>
          <p>
            UNDERTALE became a cultural phenomenon, praised for its innovative gameplay, emotional storytelling, 
            and exceptional music. It spawned a massive fan community that has created countless fan works, 
            including the numerous <strong>Alternate Universes (AUs)</strong> and <strong>Alternate Timelines (ATs)</strong> 
            that this website documents.
          </p>

          <div className="quote-box">
            <p className="quote">"Despite everything, it's still you."</p>
            <p className="quote-attribution">- The Mirror, UNDERTALE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
