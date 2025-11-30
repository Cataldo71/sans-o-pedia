import React from 'react';

const ATs: React.FC = () => {
  return (
    <div className="ats-section">
      <div className="section-header">
        <h1>ALTERNATE TIMELINES (ATs)</h1>
        <p className="section-subtitle">When the timeline gets a little wobbly...</p>
      </div>

      <div className="content-section">
        <div className="intro-text">
          <h2>★ What are Alternate Timelines? ★</h2>
          <p>
            <strong>Alternate Timelines (ATs)</strong> are <strong>fan-created stories</strong> that explore different paths and outcomes 
            within the original UNDERTALE universe framework. Unlike AUs which completely reimagine the world, 
            ATs ask "what if?" questions about events that could have happened within the same Underground we know and love.
          </p>

          <div className="at-vs-au">
            <h3>ATs vs AUs: What's the Difference?</h3>
            <div className="comparison-grid">
              <div className="comparison-item">
                <h4>🌌 Alternate Universes (AUs)</h4>
                <p>Change the fundamental rules, setting, or character designs. Same characters, completely different world.</p>
                <p><em>Example: Underswap (characters swap roles), Outertale (set in space)</em></p>
              </div>
              <div className="comparison-item">
                <h4>⏰ Alternate Timelines (ATs)</h4>
                <p>Explore different outcomes within the same Underground. Same world, different events or consequences.</p>
                <p><em>Example: What if Sans snapped? What if the CORE failed? What if Gaster helped?</em></p>
              </div>
            </div>
          </div>

          <div className="community-creativity">
            <h3>★ Born from Community Passion ★</h3>
            <p>
              Like AUs, ATs are <strong>entirely community-created content</strong> that showcase the incredible dedication 
              of UNDERTALE fans. The community has developed these timelines through:
            </p>
            <ul className="creativity-list">
              <li>🎮 <strong>Fan-made games and battles</strong> featuring epic encounters like Sans with Gaster's help</li>
              <li>🎵 <strong>Original music compositions</strong> like "An Enigmatic Encounter" and "The Murder"</li>
              <li>📚 <strong>Detailed storylines</strong> exploring the psychological impact of genocide routes</li>
              <li>🎨 <strong>Character redesigns</strong> showing how trauma and desperation change beloved characters</li>
              <li>🎬 <strong>Animations and comics</strong> bringing these darker timelines to life</li>
            </ul>
            <p>
              These timelines often explore <strong>mature themes</strong> like trauma, moral corruption, survival, and consequence - 
              topics that the original game touches on but doesn't fully explore. They represent the community's desire to 
              dive deeper into UNDERTALE's philosophical questions about choice, consequence, and redemption.
            </p>
          </div>
        </div>

        <div className="ats-grid">
          <div className="at-card dusttale">
            <div className="at-header">
              <h2 className="at-title">DUSTTALE</h2>
              <p className="at-subtitle">The Timeline of Retribution</p>
            </div>
            <div className="at-content">
              <p className="at-description">
                In this dark timeline, Sans reaches his breaking point after witnessing countless genocide runs. 
                Driven to desperation by the human's repeated murders of his friends and family, Sans decides 
                to take matters into his own hands. He begins his own "genocide route," systematically eliminating 
                monsters throughout the Underground to gain enough LOVE and power to finally defeat the human.
              </p>
              <div className="at-details">
                <h4>★ Key Elements:</h4>
                <ul>
                  <li>Sans becomes the antagonist, driven by desperation and trauma</li>
                  <li>Features "Murder Sans" - a corrupted version gaining LOVE through killing</li>
                  <li>Explores themes of moral corruption and the cycle of violence</li>
                  <li>The Underground becomes a wasteland as Sans eliminates its inhabitants</li>
                  <li>Iconic track: "Megalovania (Dusttale Mix)"</li>
                </ul>
              </div>
              <div className="at-theme">
                <strong>Core Theme:</strong> What happens when even the most laid-back character 
                is pushed beyond their limit?
              </div>
            </div>
          </div>

          <div className="at-card horrortale">
            <div className="at-header">
              <h2 className="at-title">HORRORTALE</h2>
              <p className="at-subtitle">The Timeline of Despair</p>
            </div>
            <div className="at-content">
              <p className="at-description">
                Set years after a failed Neutral route, Horrortale depicts a nightmare scenario where the 
                CORE has shut down, plunging the Underground into darkness and starvation. The human left 
                through the barrier, leaving the monsters trapped and slowly dying. In this post-apocalyptic 
                Underground, desperation has driven the monsters to unspeakable acts of survival.
              </p>
              <div className="at-details">
                <h4>★ Key Elements:</h4>
                <ul>
                  <li>A starving Underground where food is the ultimate currency</li>
                  <li>Sans suffers from severe head trauma and memory issues</li>
                  <li>Papyrus tries desperately to maintain hope and normalcy</li>
                  <li>Undyne becomes the ruthless ruler, making harsh survival decisions</li>
                  <li>Toriel runs a dark version of her pie shop</li>
                  <li>Explores themes of survival, desperation, and moral decay</li>
                </ul>
              </div>
              <div className="at-theme">
                <strong>Core Theme:</strong> How far would you go to survive when hope is lost?
              </div>
            </div>
          </div>

          <div className="at-card lastbreath">
            <div className="at-header">
              <h2 className="at-title">UNDERTALE: LAST BREATH</h2>
              <p className="at-subtitle">The Timeline of Final Stand</p>
            </div>
            <div className="at-content">
              <p className="at-description">
                In this timeline, Sans faces his ultimate challenge during a genocide route, but he's not alone. 
                A mysterious figure known as "The Man Who Speaks in Hands" - strongly implied to be W.D. Gaster - 
                provides Sans with assistance in his final battle. This creates an epic, multi-phase encounter 
                that pushes both Sans and the human to their absolute limits.
              </p>
              <div className="at-details">
                <h4>★ Key Elements:</h4>
                <ul>
                  <li>Extended, multi-phase Sans boss fight with enhanced abilities</li>
                  <li>Gaster's mysterious intervention and assistance</li>
                  <li>Sans pushes beyond his normal limits with determination</li>
                  <li>Features incredible fan-made music and battle mechanics</li>
                  <li>Explores the bond between Sans and Gaster</li>
                  <li>Epic final stand against the genocide route</li>
                </ul>
              </div>
              <div className="at-theme">
                <strong>Core Theme:</strong> Sometimes, when everything is on the line, 
                help comes from the most unexpected places.
              </div>
            </div>
          </div>

          <div className="at-card aftertale">
            <div className="at-header">
              <h2 className="at-title">AFTERTALE</h2>
              <p className="at-subtitle">The Timeline of Survival</p>
            </div>
            <div className="at-content">
              <p className="at-description">
                In a stunning twist of fate, Sans manages to survive a genocide route by accessing something 
                that should be impossible for monsters: DETERMINATION. Through sheer will and desperate circumstances, 
                he reaches the save screen and creates a new timeline. But survival comes with a price, and Sans 
                must grapple with the knowledge of what happened while existing in a reality that technically 
                shouldn't exist.
              </p>
              <div className="at-details">
                <h4>★ Key Elements:</h4>
                <ul>
                  <li>Sans gains determination and the ability to SAVE after surviving genocide</li>
                  <li>Creates a new timeline where he remembers everything from the previous one</li>
                  <li>Explores the psychological trauma of remembering your own death</li>
                  <li>Sans struggles with the weight of preventing future genocide routes</li>
                  <li>Features "Geno!Sans" - a Sans who has experienced true death and returned</li>
                  <li>Questions what it means to exist outside the normal flow of timelines</li>
                </ul>
              </div>
              <div className="at-theme">
                <strong>Core Theme:</strong> What happens when someone cheats death itself? 
                Sometimes surviving is just the beginning of the real challenge.
              </div>
            </div>
          </div>
          <div className="at-card nomoredeals">
            <div className="at-header">
              <h2 className="at-title">NO MORE DEALS</h2>
              <p className="at-subtitle">Breaking the Pact • Defying Oblivion</p>
            </div>
            <div className="at-content">
              <p className="at-description">
                <strong>No More Deals</strong> is a timeline where, instead of you and Chara making a bargain to
                erase the empty genocide timeline you're in, you choose to <strong>fight Chara</strong>. In this framing, Chara is
                <em>not</em> the villain, but another force within the timeline—an embodiment of consequence—so the clash is about
                agency and meaning rather than simple good vs. evil.
              </p>
              <div className="at-details">
                <h4>★ Key Elements:</h4>
                <ul>
                  <li><strong>Divergence Point:</strong> Refuse the pact with Chara and stand your ground.</li>
                  <li><strong>Confrontation Framing:</strong> A climactic confrontation with Chara as a timeline-bound force, not a villain.</li>
                  <li><strong>Meta Consequences:</strong> SAVE/RESET echoes and memory persistence play a role in the outcome.</li>
                  <li><strong>Thematic Focus:</strong> Accountability, defiance, and reclaiming agency—without villainizing Chara.</li>
                  <li><strong>Presentation:</strong> Often portrayed with altered music/visuals to emphasize the broken bargain.</li>
                </ul>
              </div>
              <div className="at-theme">
                <strong>Core Theme:</strong> When confronted with erasure, choosing to fight asserts that meaning is made—not bargained—even when facing a force rather than a villain.
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-note">
          <p>
            <strong>Remember:</strong> These Alternate Timelines showcase the incredible creativity of the 
            UNDERTALE fan community. Each explores different aspects of the game's themes and characters, 
            often taking them to darker or more extreme conclusions than the original game.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ATs;
