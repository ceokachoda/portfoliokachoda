# Phase 2 3D Experience Architecture

## Objective

Phase 2 creates the first cinematic world for Karan Malakar's founder portfolio. It is intentionally not a content-section build. The visitor enters a red cherry blossom forest that represents the WeDrip ecosystem, Northeast India, and a young founder building multiple technology ventures.

## Source Of Truth

- Founder: Karan Malakar
- Title: Student Entrepreneur
- Role: CEO & Co-Founder, WeDrip
- Age: 20
- Location: Shillong - Guwahati, Northeast India
- Education: B.Tech Artificial Intelligence, Royal Global University
- Ventures: WeDrip, WeDrip OS, Flow COS, Coaching OS, WeRyd, Kaizen Cafe, North East Home Rental, Pharma OS, Gym OS
- Clients: Mansoon AI, FyneStudy, Suhashi

The canonical profile data lives in `src/config/founder.ts`.

## Component Structure

```txt
CinematicShell
  SiteChrome
  FounderExperience
    IntroSequence
    SceneCanvas (lazy, client-only)
      CherryBlossomWorld
        CameraRig
        CherryForest
        PetalField
        FloatingParticles
        FloatingLanterns
        DynamicFog
        EffectComposer
    StaticExperienceFallback
```

## Performance Strategy

- The Three.js canvas is dynamically imported with SSR disabled.
- Device capability detection selects `reduced`, `mobile`, `standard`, or `ultra`.
- Mobile gets lower DPR, fewer trees, fewer particles, no postprocessing bloom.
- Desktop gets bloom and a denser world while keeping geometry instanced.
- Reduced motion and unsupported WebGL receive a static cinematic fallback.
- Particles and petals use shader animation instead of React state updates.
- The cherry forest uses instanced meshes for trunks, canopies, and glow fields.

## Scene Direction

- Massive crimson cherry blossom forest
- Floating shader-driven petals
- Soft fog bands and native scene fog
- Emissive blossom canopies with bloom on capable devices
- Floating lantern forms without excessive point-light cost
- Mouse-driven camera parallax
- Cinematic intro overlay that loads into the world before revealing the founder signal

## Phase 3 Notes

Future portfolio sections should render above or after this world without disturbing the scene manager. The scene can remain as the persistent atmospheric layer while Phase 3 introduces story, ventures, proof, clients, and contact modules.
