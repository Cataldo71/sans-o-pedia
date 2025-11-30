import React from 'react';

const AUs: React.FC = () => {
  return (
    <div className="aus-section">
      <div className="section-header">
        <h1>ALTERNATE UNIVERSES (AUs)</h1>
        <p className="section-subtitle">Exploring the infinite possibilities of the Underground</p>
      </div>

      <div className="content-section">
        <div className="intro-text">
          <h2>★ What are Alternate Universes? ★</h2>
          <p>
            <strong>Alternate Universes (AUs)</strong> are entirely <strong>fan-created variations</strong> of the original UNDERTALE universe. 
            Born from the incredible creativity and passion of the UNDERTALE community, these reimaginings fundamentally 
            change core elements of the game while preserving the characters and themes that make UNDERTALE special.
          </p>

          <div className="au-explanation">
            <h3>How AUs Work:</h3>
            <ul className="explanation-list">
              <li><strong>Character Redesigns:</strong> Same characters, completely different personalities, appearances, or roles</li>
              <li><strong>Setting Changes:</strong> Moving the Underground to space, medieval times, or entirely new dimensions</li>
              <li><strong>Tone Shifts:</strong> Making the world darker, lighter, more comedic, or more serious</li>
              <li><strong>Rule Changes:</strong> Altering the fundamental mechanics of magic, souls, or determination</li>
              <li><strong>Role Swaps:</strong> Characters taking on completely different positions and relationships</li>
            </ul>
          </div>

          <div className="community-spotlight">
            <h3>★ A Community-Driven Phenomenon ★</h3>
            <p>
              What makes UNDERTALE's AU community truly special is its <strong>collaborative nature</strong>. These aren't 
              official expansions or sequels - they're passionate fan projects created by artists, writers, musicians, 
              and game developers who fell in love with Toby Fox's world. The community has produced:
            </p>
            <ul className="community-contributions">
              <li>🎨 <strong>Thousands of original artworks</strong> reimagining characters in new styles</li>
              <li>🎵 <strong>Complete soundtrack remixes</strong> adapting Toby Fox's music to new themes</li>
              <li>📖 <strong>Extensive written stories</strong> exploring character development and world-building</li>
              <li>🎮 <strong>Fan games and interactive experiences</strong> bringing AUs to playable life</li>
              <li>🎭 <strong>Comics and animations</strong> telling stories within these alternate worlds</li>
            </ul>
            <p>
              The result is a <strong>massive, interconnected multiverse</strong> of creativity that has kept UNDERTALE's 
              spirit alive and growing years after the original game's release.
            </p>
          </div>
        </div>

        <h2 className="showcase-title">★ Featured Alternate Universes ★</h2>

        <div className="aus-grid">
          <div className="au-card underfell-card">
            <div className="au-header">
              <h2 className="au-title">UNDERFELL</h2>
              <p className="au-subtitle">The Underground's Dark Reflection</p>
            </div>
            <div className="au-content">
              <p className="au-description">
                Welcome to a twisted reflection of the Underground, where kindness is weakness and survival 
                demands cruelty. In Underfell, the monsters aren't just trapped—they're corrupted by despair, 
                anger, and the harsh reality of their imprisonment. This isn't the hopeful world of mercy and 
                friendship; this is a realm where trust is dangerous and violence is the norm.
              </p>
              <div className="au-details">
                <h4>★ Key Differences:</h4>
                <ul>
                  <li><strong>Sans:</strong> Red jacket, gold tooth, cigarette—cynical and aggressive, but still protects Papyrus</li>
                  <li><strong>Papyrus:</strong> Edgier design with battle scars, still optimistic but more ruthless</li>
                  <li><strong>Toriel:</strong> Tough love approach—she'll help you survive, but you better earn it</li>
                  <li><strong>Undyne:</strong> Even more brutal and militaristic, rules through fear and strength</li>
                  <li><strong>Flowey:</strong> A rare beacon of genuine kindness—actually wants to help and guide you safely through this hostile world</li>
                </ul>
              </div>
              <div className="au-theme">
                <strong>Core Theme:</strong> What happens when hope dies and desperation takes over? 
                Even in darkness, some bonds remain unbroken.
              </div>
            </div>
          </div>

          <div className="au-card reapertale-card">
            <div className="au-header">
              <h2 className="au-title">REAPERTALE</h2>
              <p className="au-subtitle">Gods Among Monsters</p>
            </div>
            <div className="au-content">
              <p className="au-description">
                In the realm of gods and divine beings, the familiar faces of UNDERTALE take on mythological 
                roles that echo ancient Greek legends. This isn't just a costume change—it's a complete 
                reimagining where characters wield divine powers, govern cosmic forces, and navigate the 
                complex relationships between mortality and immortality.
              </p>
              <div className="au-details">
                <h4>★ Divine Roles:</h4>
                <ul>
                  <li><strong>Sans (Death):</strong> The Grim Reaper himself—calm, inevitable, but not without compassion</li>
                  <li><strong>Toriel (Life):</strong> Goddess of life and nature, Death's eternal opposite and complicated love</li>
                  <li><strong>Papyrus (God of the Dead):</strong> Guardian and guide of souls in the afterlife, ensuring the deceased find peace and proper rest</li>
                  <li><strong>Undyne (War):</strong> Goddess of battle and conflict, fierce protector of divine order</li>
                  <li><strong>Alphys (Knowledge):</strong> Goddess of wisdom and technology, keeper of divine secrets</li>
                  <li><strong>Asgore:</strong> King of the gods, bearing the weight of divine leadership</li>
                </ul>
              </div>
              <div className="au-theme">
                <strong>Core Theme:</strong> Even gods must grapple with love, loss, duty, and the meaning 
                of existence. Power doesn't eliminate pain—it just makes the stakes higher.
              </div>
            </div>
          </div>

          <div className="au-card helptale-card">
            <div className="au-header">
              <h2 className="au-title">HELP_TALE</h2>
              <p className="au-subtitle">When Realities Collide</p>
            </div>
            <div className="au-content">
              <p className="au-description">
                Imagine if the barriers between alternate universes shattered, causing fragments of different 
                AUs to crash together and fuse in impossible ways. HELP_TALE is a nightmarish amalgamation where 
                characters exist as combinations of their various AU counterparts—creating beings that are 
                simultaneously familiar and utterly alien. It's a universe crying out for help, trapped in 
                a chaotic fusion of realities.
              </p>
              <div className="au-details">
                <h4>★ Amalgamate Characteristics:</h4>
                <ul>
                  <li><strong>Multi-AU Fusions:</strong> Characters blend traits from multiple universes simultaneously</li>
                  <li><strong>Reality Glitches:</strong> The world itself is unstable, with locations and rules constantly shifting</li>
                  <li><strong>Fractured Memories:</strong> Characters remember conflicting versions of events from different timelines</li>
                  <li><strong>Visual Chaos:</strong> Character designs mix and match elements from various AUs</li>
                  <li><strong>Desperate Help-Seeking:</strong> Everyone is aware something is wrong, but no one knows how to fix it</li>
                  <li><strong>Meta-Horror:</strong> The AU itself seems to be asking the audience for help</li>
                </ul>
              </div>
              <div className="au-theme">
                <strong>Core Theme:</strong> What happens when too much multiverse mixing creates something 
                that shouldn't exist? Sometimes, trying to have everything results in losing yourself entirely.
              </div>
            </div>
          </div>

          <div className="au-card underswap-card">
            <div className="au-header">
              <h2 className="au-title">UNDERSWAP</h2>
              <p className="au-subtitle">Familiar Faces, Swapped Roles</p>
            </div>
            <div className="au-content">
              <p className="au-description">
                In <strong>Underswap</strong>, many core characters exchange roles and surface traits while keeping their
                hearts intact. The world feels playfully rebalanced: the laid‑back becomes enthusiastic, the stern turns
                soft, and new dynamics emerge from the swaps. It’s the same Underground—just seen through a wonderfully
                rearranged lens.
              </p>
              <div className="au-details">
                <h4>★ Signature Role Swaps:</h4>
                <ul>
                  <li><strong>Sans ↔ Papyrus:</strong> Sans takes the upbeat, enthusiastic front‑liner role; Papyrus is the laid‑back, comedic brother</li>
                  <li><strong>Toriel ↔ Asgore:</strong> Toriel serves as monarch while Asgore takes the caretaker role</li>
                  <li><strong>Alphys ↔ Undyne:</strong> Alphys becomes the bold warrior; Undyne is the shy, science‑minded one</li>
                </ul>
              </div>
              <div className="au-theme">
                <strong>Core Theme:</strong> By shuffling roles, Underswap highlights how personality shines through no matter the
                position—identity is more than a job title.
              </div>
            </div>
          </div>

          <div className="au-card storyshift-card">
            <div className="au-header">
              <h2 className="au-title">STORYSHIFT</h2>
              <p className="au-subtitle">The Great Role Reversal</p>
            </div>
            <div className="au-content">
              <p className="au-description">
                What if the Underground's story remained the same, but everyone played different roles? 
                Storyshift presents a fascinating experiment in character dynamics, where beloved characters 
                take on completely different positions in the Underground's hierarchy while maintaining their 
                core personalities. The result is a familiar yet entirely fresh take on the UNDERTALE experience.
              </p>
              <div className="au-details">
                <h4>★ Role Assignments:</h4>
                <ul>
                  <li><strong>Chara:</strong> Takes Sans' role as the laid-back sentry with powerful abilities</li>
                  <li><strong>Asriel:</strong> Takes Papyrus' role as the enthusiastic, puzzle-loving younger sibling</li>
                  <li><strong>Sans:</strong> Takes Asgore's role as the reluctant king bearing the weight of leadership</li>
                  <li><strong>Papyrus:</strong> Takes Toriel's role as the caring caretaker in the Ruins</li>
                  <li><strong>Asgore:</strong> Takes Alphys' role as the awkward royal scientist</li>
                  <li><strong>Toriel:</strong> Takes Undyne's role as the head of the Royal Guard</li>
                </ul>
              </div>
              <div className="au-theme">
                <strong>Core Theme:</strong> How do familiar personalities adapt to unfamiliar circumstances? 
                Character is revealed not by position, but by how one handles responsibility.
              </div>
            </div>
          </div>
        </div>

        <div className="au-footer-note">
          <p>
            <strong>Remember:</strong> These are just a few examples from the vast multiverse of UNDERTALE AUs. 
            Each represents the incredible creativity of fan creators who took Toby Fox's foundation and built 
            entirely new worlds of possibilities. The AU community continues to create, innovate, and surprise 
            with new concepts that push the boundaries of what UNDERTALE can be.
          </p>
          <p className="determination-text">Stay DETERMINED! More AUs are being documented regularly.</p>
        </div>
      </div>
    </div>
  );
};

export default AUs;
