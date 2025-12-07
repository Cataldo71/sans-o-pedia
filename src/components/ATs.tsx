import React from 'react';

const ATs: React.FC = () => {
  return (
    <div className="ats-section">
      <div className="section-header">
        <h1>ALTERNATE TIMELINES (ATs)</h1>
        <p className="section-subtitle">When the timeline gets a little wobbly...</p>
      </div>

      <div className="content-section">
        <div className="update-note" role="note" aria-label="Update notice">
          <p>
            Ongoing update: More ATs will be added over time as new timelines are created and shared.
          </p>
        </div>
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

        {/* Canon vs Fanon (formatted like Home/AUs) */}
        <div className="content-section" aria-label="Canon vs Fanon in ATs">
          <div className="game-description">
            <h2>Canon vs Fanon in ATs</h2>
            <p>
              <strong>Canon</strong> refers to what an AT’s original creators explicitly show or state in their
              works (posts, comics, releases, reference sheets). <strong>Fanon</strong> describes popular community
              portrayals and headcanons that feel fitting but aren’t creator-confirmed. Both are useful: canon
              anchors the intended timeline, while fanon explores possibilities many fans enjoy. Fanon isn’t bad —
              it’s a sign of community creativity and exploration; just remember it isn’t official.
            </p>
            <div className="comparison-grid">
              <div className="comparison-item">
                <h4>📘 Canon</h4>
                <p>• Comes from the AT’s creators and official materials.</p>
                <p>• Baseline for character behavior, events, and rules within that timeline.</p>
              </div>
              <div className="comparison-item">
                <h4>🎨 Fanon</h4>
                <p>• Community interpretations that aren’t explicitly confirmed by the creators.</p>
                <p>• Great for fanworks—just note it’s interpretive, not official.</p>
              </div>
            </div>
            <h3>★ Example: Dusttale and the Scarf</h3>
            <p>
              In <strong>FANON Dusttale</strong>, it’s common to depict Sans <strong>putting on Papyrus’ scarf</strong>
              after killing him. In <strong>CANON Dusttale</strong>, Sans <em>does not</em> do this. Calling out the
              difference helps readers know when a portrayal is creator-established or a popular community motif.
            </p>
          </div>
        </div>

        <div className="ats-grid">
          {/* UNDERTALE: SOMETHING NEW */}
          <div className="at-card somethingnew">
            <div className="at-header">
              <h2 className="at-title">UNDERTALE: SOMETHING NEW</h2>
              <p className="at-subtitle">Beyond Monster and Human</p>
            </div>
            <div className="at-content">
              <p className="at-description">
                In this timeline, Sans strikes a <strong>deal with Chara</strong> and accepts a transformation that makes him
                <strong> neither human nor monster</strong>—but something entirely new. The bargain alters the rules governing
                his SOUL and body, introducing unfamiliar abilities and limits that unsettle the Underground. <strong>Only three
                beings remain in this timeline: you, Chara, and Sans</strong>—a stark isolation that raises the stakes of every
                choice. With no witnesses and nowhere to retreat, every action becomes a statement about mercy, justice,
                and identity.
              </p>
              <div className="at-details">
                <h4>★ Key Elements:</h4>
                <ul>
                  <li><strong>Last Three Standing:</strong> The world has collapsed to just three beings—<em>you</em>,
                    <em> Chara</em>, and <em>Sans</em>—intensifying isolation and moral pressure.</li>
                  <li><strong>Divergence Point:</strong> Sans willingly makes a pact with Chara, accepting a form outside known categories.</li>
                  <li><strong>New Nature:</strong> Neither human nor monster—hybridized rules for SOUL integrity, damage, and regeneration.</li>
                  <li><strong>Power and Cost:</strong> Unique abilities (unstable gravity fields, fracturing bone constructs) balanced by risks to self and timeline stability.</li>
                  <li><strong>Arsenal:</strong> Killer Sans employs <em>knives</em> and <em>slash‑type</em> attacks as signature patterns.</li>
                  <li><strong>Moral Tension:</strong> Was the bargain a necessary evolution or a dangerous surrender of boundaries?</li>
                  <li><strong>Empty World:</strong> No bystanders remain; consequences are intimate, immediate, and inescapable.
                  </li>
                </ul>
              </div>
              <div className="at-theme">
                <strong>Core Theme:</strong> When identity shifts beyond familiar labels, ethics must find new footing.
              </div>
            </div>
          </div>

          {/* Dustbelief */}
          <div className="at-card dustbelief">
            <div className="at-header">
              <h2 className="at-title">DUSTBELIEF</h2>
              <p className="at-subtitle">The Timeline of Broken Brothers</p>
            </div>
            <div className="at-content">
              <p className="at-description">
                In this divergence, Sans begins a genocide route—driven by despair and a warped sense of
                justice—but is stopped partway through by Papyrus. Sans dies. His spirit lingers, whispering
                from the edge of SAVE files and RESET echoes, coercing Papyrus to continue what he started.
                Hope and kindness meet guilt and pressure as Papyrus is pushed toward atrocities he never
                would have chosen on his own.
              </p>
              <div className="at-details">
                <h4>★ Key Elements:</h4>
                <ul>
                  <li><strong>Divergence Point:</strong> Sans initiates the killings; Papyrus stops him, resulting in Sans's death.</li>
                  <li><strong>Haunting Influence:</strong> Sans returns as a disembodied presence, pressuring Papyrus to carry on the genocide.</li>
                  <li><strong>Papyrus's Descent:</strong> Internal conflict between his innate compassion and fraternal duty.</li>
                  <li><strong>Moral Themes:</strong> Coercion, grief, and the erosion of ideals under the weight of loss.</li>
                  <li><strong>Borrowed Arsenal:</strong> Sans — and later Papyrus — can wield the powers of monsters they've killed (e.g., Toriel’s fire, Undyne’s spears).</li>
                  <li><strong>Phantom Attack:</strong> Sans manifests as a ghostly attacker, striking with the usual white/blue bone patterns.</li>
                  <li><strong>Battle Flavor:</strong> Attacks blend bone patterns with guilt‑laden warnings and hesitations.</li>
                </ul>
              </div>
              <div className="at-theme">
                <strong>Core Theme:</strong> When love becomes pressure, even the brightest souls can dim.
              </div>
            </div>
          </div>

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
                  <li>Absorbed attacks: Sans uses the abilities of monsters he’s killed (Toriel’s fire, Undyne’s spears, etc.)</li>
                  <li>Phantom attack: Papyrus can manifest as a phantom that assaults the player with red bone patterns.</li>
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
                  <li>Sans is perpetually hungry and increasingly brutal; the scent of food can trigger a violent frenzy</li>
                  <li>Papyrus tries desperately to maintain hope and normalcy</li>
                  <li>Undyne becomes the ruthless ruler, making harsh survival decisions</li>
                  <li>Toriel runs a dark version of her pie shop</li>
                  <li>Explores themes of survival, desperation, and moral decay</li>
                  <li>Horrortale Sans’s attack patterns lean into short, savage bursts; when “food” is near, he turns erratic and relentless</li>
                </ul>
              </div>
              <div className="at-details">
                <h4>★ Sans — Lore & Attack Patterns</h4>
                <ul>
                  <li><strong>Lore:</strong> A scarred survivor driven by gnawing hunger; mercy erodes under constant scarcity.</li>
                  <li><strong>Trigger:</strong> The smell or promise of food pushes him into a frenzy — tempo spikes, restraint drops.</li>
                  <li><strong>Pattern:</strong> Brutal, high‑pressure openings (bones/blasters/gravity feints), then ragged attrition; near food, bursts chain with minimal warning.</li>
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
                In this telling, Sans is <strong>healed by W.D. Gaster</strong> after being pushed past his limits — and, to
                keep him alive, Gaster <strong>gradually takes control</strong> of Sans’s body during the fight. The result is an
                erratic, multi‑phase battle where patterns turn <strong>chaotic and randomized</strong>, punctuated by reality‑warps
                that <strong>flip the screen</strong> or even <strong>spin the arena</strong>. It’s a last stand sustained by borrowed time and
                a scientist’s cold determination.
              </p>
              <div className="at-details">
                <h4>★ Key Elements:</h4>
                <ul>
                  <li><strong>Gaster’s Role:</strong> W.D. Gaster first <em>heals</em> Sans, then <em>assumes partial control</em> to keep him alive.</li>
                  <li><strong>Chaotic Patterns:</strong> Attacks feel <em>randomized</em> with abrupt tempo shifts and unstable gravity.</li>
                  <li><strong>Reality Distortions:</strong> Phases may <em>flip the screen upside‑down</em> or <em>rotate/spin</em> the battlefield.</li>
                  <li><strong>Multi‑Phase Escalation:</strong> Each phase raises risk as control shifts further from Sans to Gaster.</li>
                  <li><strong>Tension:</strong> Survival versus autonomy — staying alive costs Sans more of himself.</li>
                  <li><strong>Presentation:</strong> Fan works emphasize glitch motifs, fractured UI, and disorienting camera tricks.</li>
                </ul>
              </div>
              <div className="at-details">
                <h4>★ Sans — Lore & Attack Patterns</h4>
                <ul>
                  <li><strong>Lore:</strong> Sans is patched up by Gaster; ongoing <em>external control</em> maintains his body at the brink.</li>
                  <li><strong>Control Window:</strong> When vitals crash, Gaster <em>overrides</em> Sans — power rises, autonomy drops.</li>
                  <li><strong>Pattern:</strong> Bursts of <em>chaotic</em> bones/blasters, jagged timings, gravity feints; phases rarely repeat.</li>
                  <li><strong>Anomalies:</strong> Arena <em>inversion</em> (upside‑down) or <em>rotation/spin</em> forces re‑learning movement mid‑attack.</li>
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

          {/* UNDERTALE: THE THOUGHT */}
          <div className="at-card thethought" aria-label="UNDERTALE: THE THOUGHT card">
            <div className="at-header">
              <h2 className="at-title">UNDERTALE: THE THOUGHT</h2>
              <p className="at-subtitle">Sevenfold Power • A Mind Like a Prism</p>
            </div>
            <div className="at-content">
              <p className="at-description">
                In this Alternate Timeline, Sans turns the tables: he <strong>seizes the human’s SOUL</strong> and then
                <strong> absorbs the six human SOULs</strong> trapped in the Underground. Transformed by the full spectrum of
                human determination, he becomes an overwhelming force whose attacks refract through memories of the
                <em> items the fallen humans used</em> — each color channeling a different style of assault.
              </p>
              <div className="at-details">
                <h4>★ Key Elements:</h4>
                <ul>
                  <li><strong>Divergence Point:</strong> Sans takes the human’s SOUL before the final confrontation, then draws in the other six.</li>
                  <li><strong>Sevenfold Ascension:</strong> With all seven human SOULs, Sans’s power and persistence surge beyond any prior fight.</li>
                  <li><strong>Item‑Themed Arsenal:</strong> Attacks mirror the humans’ gear: <em>Toy Knife</em> slashes, 
                    <em>Tough Glove</em> multi‑hit jabs, <em>Ballet Shoes</em> rhythm combos, <em>Torn Notebook</em> erratic scribble arcs, 
                    <em>Burnt Pan</em> sizzling splash shots, and <em>Toy Gun</em> precise yellow‑beam volleys.</li>
                  <li><strong>Color Motifs:</strong> A <em>rainbow of SOUL hues</em> infuses patterns: gravity shifts, blue/orange mixups, green guard tests,
                    yellow tracking beams, purple maze lanes, and red pressure phases.</li>
                  <li><strong>Stakes:</strong> Mercy windows shrink as phases prism‑shift; determination cuts both ways, threatening collapse if overused.</li>
                </ul>
              </div>
              <div className="at-details">
                <h4>★ Sans — Lore & Attack Patterns</h4>
                <ul>
                  <li><strong>Lore:</strong> A mind sharpened to a single thesis: end the cycle. The seven SOULs amplify insight and burden alike.</li>
                  <li><strong>Pattern:</strong> Rapid color‑coded sequences: bone runs that change on contact color, blasters that split into spectral beams,
                    item‑themed gimmicks between phases, and brief bullet‑hell prisms that rotate lanes.</li>
                  <li><strong>Presentation:</strong> UI and arena subtly tint per phase, with a soft <em>prismatic shimmer</em> during transitions.</li>
                </ul>
              </div>
              <div className="at-theme">
                <strong>Core Theme:</strong> Power refracted through memory — when every color of determination shines at once, what remains of choice?
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
