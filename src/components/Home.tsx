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

          {/* Canon vs Fanon explanation */}
          <div className="content-section">
            <div className="game-description">
              <h2>Canon vs Fanon in UNDERTALE</h2>
              <p>
                <strong>Canon</strong> means what the original work directly shows or states — the text of the game,
                its dialogue, mechanics, and creator-confirmed facts. <strong>Fanon</strong> is the community’s common
                interpretation: ideas that many fans accept or repeat because they feel fitting, even if they aren’t
                stated in the game. Both matter in UNDERTALE’s culture: canon anchors shared understanding, while
                fanon fuels creative works (art, comics, AUs/ATs) that explore implications and what-ifs. Fanon isn’t
                bad—it's a sign of community creativity and exploration; just remember it isn’t official.
              </p>
              <div className="comparison-grid">
                <div className="comparison-item">
                  <h4>📘 Canon</h4>
                  <p>
                    • Comes from the game itself (dialogue, encounters, endings) and official creator statements.
                  </p>
                  <p>
                    • Used as the baseline for routes, character motives, and the world’s rules (souls, SAVE/RESET, etc.).
                  </p>
                </div>
                <div className="comparison-item">
                  <h4>🎨 Fanon</h4>
                  <p>
                    • Community consensus or popular headcanons that <em>fit</em> the vibe but aren’t explicitly confirmed.
                  </p>
                  <p>
                    • Great for fanworks and discussion — just remember it’s interpretive, not official.
                  </p>
                </div>
              </div>
              <h3>★ Example: Sans and Resets</h3>
              <p>
                In <strong>canon</strong>, Sans is not shown to remember specific resets or alternate timelines. What he
                <em>does</em> have is sharp pattern recognition: he reads your behavior, timing, and expressions and draws
                eerie conclusions. The feeling that he “knows” you across runs is a dramatic effect of the game’s
                meta-design and his observational skill — not literal memory of other timelines.
              </p>
              <p>
                In <strong>fanon</strong>, people sometimes imagine Sans retaining memories between resets or being fully
                aware of multiverse mechanics. That’s a valid fan interpretation for stories and AUs/ATs, but it goes
                beyond what the game confirms. Labeling the difference helps readers know when a work is sticking to
                canon or exploring creative possibilities.
              </p>
            </div>
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

      {/* Creators information */}
      <div className="content-section">
        <div className="game-description">
          <h2>About the Creators</h2>

          <h3>★ Toby Fox</h3>
          <p>
            Toby Fox is the creator of UNDERTALE — serving as its designer, writer, composer, and primary programmer.
            He is known for weaving character themes and melodies across the soundtrack to reinforce story and emotion.
            After UNDERTALE (2015), he began releasing chapters of his follow‑up project, <strong>DELTARUNE</strong>.
          </p>
          <ul className="features-list">
            <li>
              <strong>Roles:</strong> Game design, narrative, music composition, and implementation; UNDERTALE was
              developed with a very small team and community contributors.
            </li>
            <li>
              <strong>Music highlights:</strong> Iconic tracks such as "Megalovania", "Hopes and Dreams", and
              "ASGORE" showcase his use of leitmotifs and energetic chiptune‑inspired writing.
            </li>
            <li>
              <strong>Other work:</strong> Has contributed music to projects outside UNDERTALE/DELTARUNE, including
              tracks for Game Freak titles and indie collaborations.
            </li>
          </ul>

          <h3>★ Temmie Chang</h3>
          <p>
            Temmie Chang is the lead artist and animator for UNDERTALE. Her expressive character art, sprites, and UI
            details helped define the game’s distinct look and charm. She continues to contribute art and animation to
            <strong> DELTARUNE</strong> as well.
          </p>
          <ul className="features-list">
            <li>
              <strong>Roles:</strong> Character/monster designs, sprite work, portraits, cinematic moments, and visual
              polish throughout the game.
            </li>
            <li>
              <strong>Style:</strong> Emphasis on readable silhouettes, expressive poses, and humor — influencing how
              fans depict characters across AUs and ATs.
            </li>
            <li>
              <strong>Community favorites:</strong> The in‑game shopkeeper "Temmie" and the running dog gags are playful
              nods associated with her name and art sensibility.
            </li>
          </ul>
        </div>
      </div>

      {/* Community portrayal across media */}
      <div className="content-section">
        <div className="game-description">
          <h2>How the Community Portrays UNDERTALE Across Media</h2>
          <p>
            UNDERTALE’s fandom is huge and creative. Fans re‑imagine scenes, expand lore, and interpret
            characters through many formats. Here’s a quick tour of the most common types of fan works
            you’ll see around the community.
          </p>

          <h3>★ Videos</h3>
          <ul className="features-list">
            <li>
              <strong>Animations & animatics:</strong> Key moments (boss fights, jokes, emotional reveals)
              are storyboarded or fully animated, often synced to soundtrack remixes like “Megalovania”.
            </li>
            <li>
              <strong>AMVs/edits:</strong> Character‑focused edits highlight arcs (e.g., Sans vs. the player,
              Papyrus’s optimism) using energetic cuts and text overlays.
            </li>
            <li>
              <strong>Analysis & video essays:</strong> Deep dives into themes (mercy, consequence, meta‑narrative),
              routes, and timeline theories.
            </li>
            <li>
              <strong>Let’s Plays & challenge runs:</strong> Pacifist first‑runs, blind Genocide routes, no‑hit
              boss challenges—usually with spoiler etiquette in titles/descriptions.
            </li>
          </ul>

          <h3>★ Fan Art</h3>
          <ul className="features-list">
            <li>
              <strong>Style variety:</strong> From pixel art that mirrors the game to painterly, manga, or
              stylized takes that push expressions, silhouettes, and color motifs.
            </li>
            <li>
              <strong>Character studies:</strong> Sans, Papyrus, Frisk/Chara, Undyne, Alphys, Asgore/Asriel, and
              lesser‑seen monsters are explored with different emotions, outfits, and timelines.
            </li>
            <li>
              <strong>Scene reinterpretations:</strong> Iconic lines and battles are redrawn with alternate lighting,
              camera angles, or "what‑if" outcomes.
            </li>
          </ul>

          <h3>★ Comics & Doujinshi</h3>
          <ul className="features-list">
            <li>
              <strong>Short strips:</strong> Daily life jokes (especially with the skeleton bros) and character
              banter are common.
            </li>
            <li>
              <strong>Long‑form stories:</strong> Multi‑chapter comics explore alternate choices, missing scenes,
              or post‑game epilogues; many blend humor with serious themes.
            </li>
          </ul>

          <h3>★ Music & Audio</h3>
          <ul className="features-list">
            <li>
              <strong>Remixes & rearrangements:</strong> Chiptune, orchestral, metal, lo‑fi, jazz—every OST track
              has multiple fan arrangements.
            </li>
            <li>
              <strong>Vocal covers & original songs:</strong> Lyrics built around character viewpoints or route
              emotions are popular on streaming sites.
            </li>
            <li>
              <strong>Sound design experiments:</strong> Mashups and motif swaps (e.g., character themes traded between
              scenes) to explore narrative parallels.
            </li>
          </ul>

          <h3>★ Fangames, AUs, and ATs</h3>
          <ul className="features-list">
            <li>
              <strong>AUs (Alternate Universes):</strong> Canon re‑imagined with a core twist (setting, tone, roles).
              Visual design and character dynamics change to fit the new premise.
            </li>
            <li>
              <strong>ATs (Alternate Timelines):</strong> Canon events diverge at a specific decision point;
              consequences ripple without altering the universe’s base rules.
            </li>
            <li>
              <strong>Playable fangames & mods:</strong> From small encounters to full routes; many credit inspirations
              and share progress via devlogs and demo builds.
            </li>
          </ul>

          <h3>★ Memes and Micro‑formats</h3>
          <ul className="features-list">
            <li>
              <strong>Image macros & redraws:</strong> Screenshots with captions, or panels redrawn in trending styles.
            </li>
            <li>
              <strong>Short‑form video:</strong> Quick gags using in‑game sound effects, jump‑cuts, and text‑to‑speech.
            </li>
            <li>
              <strong>Copypastas & AU prompts:</strong> Prompt chains spark collaborative world‑building in threads.
            </li>
          </ul>

          <h3>★ Live Streams, Roleplay, and Cosplay</h3>
          <ul className="features-list">
            <li>
              <strong>Streaming:</strong> First‑time playthroughs emphasize spoiler‑free chat; challenge streams showcase
              mastery of patterns and routing.
            </li>
            <li>
              <strong>Roleplay (text or live):</strong> In‑character banter explores personalities and moral questions,
              often crossing AUs/ATs.
            </li>
            <li>
              <strong>Cosplay & props:</strong> Skeleton makeup, glowing soul props, bone/blue magic VFX, and con skits.
            </li>
          </ul>

          <div className="replay-insight">
            <p>
              <strong>Community norms:</strong> Credit original creators, use spoiler tags for late‑game content, add
              content warnings where appropriate, and respect boundaries around ships/ages. Many creators allow non‑commercial
              sharing with attribution—always check their terms before remixing or reposting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
