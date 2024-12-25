import { ArtworkFilter, ArtworkItem } from '../types';

export const ARTWORK_FILTERS: ArtworkFilter[] = [
  { label: 'All', value: 'all' },
  { label: 'Image AI', value: 'image-ai' },
  { label: 'Stable Diffusion', value: 'stable-diffusion' },
  { label: 'DALL-E', value: 'dall-e' },
  { label: 'Videos AI', value: 'video-ai' }
];

export const GALLERY_ITEMS: ArtworkItem[] = [
  // Imagen AI Artworks
  {
    id: 'img25',
    title: 'The “Epic” by Proto',
    aiModel: 'Image AI',
    description: 'Holographic display is the future of human communication. Presence is not something that is simply streamed, it’s something that is felt. Proto makes digital real. "https://protohologram.com/the-epic/"',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1735163095/device-epic-2_j9cskk.png',
    type: 'image'
  },
  {
    id: 'img1',
    title: 'Virtual Hologram Transformation',
    aiModel: 'Image AI',
    description: 'The left image shows a smiling Elizabeth Pollard wearing a white outfit, standing outdoors with folded arms. The right image portrays her as a virtual hologram inside a tall rectangular display box with a red background, posed dynamically with one arm raised. This juxtaposition highlights the transition from a physical presence to a digital holographic representation.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734975418/3_Before_After_l9q2lz.png',
    type: 'image'
  },
  {
    id: 'img2',
    title: 'Enhanced Sunset Landscape',
    aiModel: 'Image AI',
    description: 'The "Before" image depicts a vibrant sunset with intense red and orange hues, featuring a stone monument and a lone figure on the grassy plain. The "After" image refines the scene with softer, more detailed textures, adding a tree to the foreground and multiple drones flying in the sky. The enhanced version balances the dramatic sky with additional elements, creating a futuristic yet pastoral atmosphere.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734975419/1_Before_After_om0gsf.png',
    type: 'image'
  },
  {
    id: 'img3',
    title: 'The Innovation Foundation at OSU',
    aiModel: 'Image AI',
    description: 'The image depicts a grand, neoclassical-style university building with the words "The Innovation Foundation at OSU" prominently displayed above it. Drones are flying in the twilight sky, symbolizing technological innovation, while the foreground showcases a well-maintained lawn and a central fountain. The scene conveys a blend of tradition and cutting-edge technology.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734203190/universal_upscale_0_bd2c6e8e-f998-4a11-a061-67e035f15d82_0_qyaaq3.jpg',
    type: 'image'
  },
  {
    id: 'img4',
    title: 'Drone in Action at Boone Pickens Stadium',
    aiModel: 'Image AI',
    description: 'The image shows a bright orange drone equipped with a camera flying in the foreground against a clear blue sky. In the background, the facade of Boone Pickens Stadium is visible, with its name prominently displayed on the building. The scene highlights the use of drone technology in a stadium setting, suggesting applications like aerial photography or surveillance.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734465973/221025_usri_demo_022_fnq9kd.png',
    type: 'image'
  },
  {
    id: 'img5',
    title: 'Drone Hovering Over Golden Wheat Fields at Sunset',
    aiModel: 'Image AI',
    description: 'The image captures a sleek drone hovering above a golden wheat field, bathed in the warm glow of a setting sun. The soft focus in the background highlights the expanse of the field, while the sharp detail of the drone contrasts with the serene, natural landscape. The scene symbolizes the integration of modern technology with agriculture.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734452359/1_vf0fvp.png',
    type: 'image'
  },
  {
    id: 'img6',
    title: 'Modern Farming: Planting with a Tractor Seeder',
    aiModel: 'Image AI',
    description: 'The image shows a green tractor with a yellow tank attachment pulling a red planting seeder, used to plant crops efficiently. Two people are seated on the planting device, feeding seedlings into it, while another person is bent over, tending to the soil. The setting is a large, green field under a partly cloudy sky, showcasing a blend of mechanized and manual agricultural techniques.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734465606/greentractor1_x6a3jr.jpg',
    type: 'image'
  },
  {
    id: 'img7',
    title: 'Drone Over a Minimalist Desert Landscape',
    aiModel: 'Image AI',
    description: 'The image features a simple, stylized desert scene with soft, pastel hues. An orange drone hovers in the sky near a white, abstract monument resembling a three-pillared structure, set against a large sun on the horizon. The clean and minimalist design conveys a futuristic and serene atmosphere.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734975419/2_umv7id.png',
    type: 'image'
  },
  {
    id: 'img8',
    title: 'Enhanced Minimalist Desert Scene',
    aiModel: 'Image AI',
    description: 'The "Before" image shows a simplistic outline of a desert landscape with minimal detail, featuring a faint structure and scattered small shapes. The "After" image transforms the scene with added depth, incorporating an orange drone, a defined three-pillared monument, and a soft gradient background with a prominent sun. The refined version brings warmth and dimension, elevating the minimalist aesthetic.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734975418/2_Before_After_e00iek.png',
    type: 'image'
  },
  {
    id: 'img9',
    title: 'Comparison of ComfyUI and Fooocus Interfaces',
    aiModel: 'Image AI',
    description: 'The "ComfyUI" interface on the left displays a complex node-based workflow with interconnected elements for creating or editing an image. The "Fooocus" interface on the right features a simpler, grid-based layout with multiple preview options for image outputs and a clean sidebar for settings. The comparison highlights the difference between a technical, customizable approach and a user-friendly, streamlined design.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734975422/AI_Backends_slazmf.png',
    type: 'image'
  },
  {
    id: 'img10',
    title: 'Node-Based Workflow for Farm Automation Visualization',
    aiModel: 'Image AI',
    description: 'The image showcases a node-based interface for creating or editing a farm automation scene. The interconnected nodes represent various steps, such as inputs, transformations, and outputs, leading to the final rendered image of a farm. The output scene features a greenhouse, a tractor, and a drone in a bright, stylized illustration, emphasizing modern agricultural technologies.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734452381/AI_Backend_Workflow_hepco6.jpg',
    type: 'image'
  },
  {
    id: 'img11',
    title: 'Surreal Landscape: Cows and Oil Pumps',
    aiModel: 'Image AI',
    description: 'The image depicts a surreal landscape blending agriculture and industry. A cow stands prominently in the foreground, while an oil pump jack operates nearby on vibrant red and green rolling hills under a striking orange sky. The contrasting elements of nature and machinery create a vivid and thought-provoking scene.',
imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734304689/Leonardo_Phoenix_a_field_with_a_cow_just_replace_the_colors_fo_1_sbatqc.jpg',
    type: 'image'
  },
 {
    id: 'img12',
    title: 'The Evolution of Farming: Human vs. Robot',
    aiModel: 'Image AI',
    description: 'The image contrasts traditional and futuristic farming methods in a split-screen composition. On the left, a farmer in a straw hat works the soil with a shovel under a warm, golden sunset. On the right, a humanoid robot performs the same task with precision, surrounded by hovering drones under a bright blue sky. The scene symbolizes the transition from manual to automated farming technologies.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734452358/8_g0trj8.png',
    type: 'image'
  },
 {
    id: 'img13',
    title: 'Futuristic Cityscape with Wind Turbines',
    aiModel: 'Image AI',
    description: 'The image depicts a city skyline blending urban architecture with sustainable energy elements. Prominent skyscrapers, including one resembling the Empire State Building, are interspersed with large wind turbines. The scene features abstract overlays of geometric designs and soft pastel hues, creating a futuristic aesthetic as the sun sets in the background.',
imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734452359/9_urtxnr.png',
    type: 'image'
  },
 {
    id: 'img14',
    title: 'Art vs. AI-Generated Art',
    aiModel: 'Image AI',
    description: 'The image compares two styles of artwork side by side. The top right features a traditional painting with rich textures and abstract elements, including a stone monument and dramatic skies. The bottom left showcases AI-generated art, depicting a realistic cow in a vibrant, digitally stylized landscape with smooth gradients and a surreal orange-red sky. The composition highlights the differences in artistic techniques and tools.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734304693/Art_qtausm.png',
    type: 'image'
  },
 {
    id: 'img15',
    title: 'Sustainable Agriculture in a Futuristic Landscape',
    aiModel: 'Image AI',
    description: 'The image depicts a serene yet futuristic rural setting with rolling hills, wind turbines, and a bright orange sun. A farmer stands near a tractor, gazing at a drone flying overhead, symbolizing the integration of advanced technology in agriculture. The muted earth tones and abstract geometric overlays create a balance between nature, technology, and sustainability.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734452359/3_vz4odq.png',
    type: 'image'
  },
 {
    id: 'img16',
    title: 'Farmers Harvesting Together in a Field',
    aiModel: 'Image AI',
    description: 'The image shows two smiling farmers dressed in overalls and caps, carrying a wooden basket filled with freshly harvested produce, likely lemons or oranges. They are walking through a golden field under soft, hazy light, evoking a sense of teamwork and joy in agricultural work. The serene and muted color palette emphasizes the simplicity and warmth of rural life.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734452359/2_eivoxo.png',
    type: 'image'
  },
 {
    id: 'img17',
    title: 'Robotic Farming in a High-Tech Greenhouse',
    aiModel: 'Image AI',
    description: 'The image depicts a futuristic greenhouse where humanoid robots are tending to rows of vibrant green plants on long tables. A scientist in a lab coat stands in the background, overseeing the operation, with digital monitors displaying data and analytics. The sleek, well-lit environment highlights the integration of robotics and technology in modern agriculture.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734452359/5_lnz6ig.png',
    type: 'image'
  },
 {
    id: 'img18',
    title: 'The Digital Tree of Knowledge',
    aiModel: 'Image AI',
    description: 'The image features a solitary tree with glowing branches, illuminated by digital nodes and circuits, resembling a fusion of nature and technology. The backdrop is a dark, misty blue, creating a mystical atmosphere, while the lights on the tree symbolize connectivity and the flow of information. This artistic composition reflects the concept of growth, innovation, and the intersection of the natural and digital worlds.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734452359/7_hgo37e.png',
    type: 'image'
  },
 {
    id: 'img19',
    title: 'Architectural Blueprints of Futuristic City Layout',
    aiModel: 'Image AI',
    description: 'The image showcases detailed, white 3D architectural blueprints on a bright blue background, depicting multiple interconnected structures, including high-rise buildings, domed landmarks, and monumental statues. Each structure is situated within circular layouts, connected by intricate lines and grids. The design illustrates a futuristic urban planning concept, emphasizing symmetry, functionality, and advanced infrastructure.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734452360/6_iptsky.png',
    type: 'image'
  },
 {
    id: 'img20',
    title: 'Modern Farming Equipment and Greenhouse',
    aiModel: 'Image AI',
    description: 'The image features a stylized illustration of modern agricultural tools, including a green tractor, a yellow front-loader, and a red drone hovering above. To the right, a large greenhouse is depicted with crates of produce nearby, set against a backdrop of light green trees and open fields. The scene emphasizes the integration of advanced machinery and sustainable farming practices.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734452359/4_hbtrwf.png',
    type: 'image'
  },
 {
    id: 'img21',
    title: 'Node-Based Workflow for Agricultural Scene Creation',
    aiModel: 'Image AI',
    description: 'The image displays a node-based interface used to design a digital illustration of a modern agricultural scene. The interconnected nodes represent different steps in the workflow, such as input parameters, transformations, and rendering, leading to the final output of a scene featuring a tractor, front-loader, drone, and a greenhouse. This setup highlights the structured and modular approach to creating digital content.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734452381/AI_Backend_Workflow_hepco6.jpg',
    type: 'image'
  },
 {
    id: 'img22',
    title: 'MAFM: Futuristic Technology Logo',
    aiModel: 'Image AI',
    description: 'The image features the acronym "MAFM" in bold, futuristic purple lettering, set against a dark background. At the center is a circular emblem resembling a microchip, with intricate digital lines and geometric patterns radiating outward. The glowing purple hues and sleek design convey themes of advanced technology and innovation.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734452277/WhatsApp_Image_2024-12-13_at_9.53.40_PM_1_rzagcq.jpg',
    type: 'image'
  },
 {
    id: 'img23',
    title: 'Hamm Institute Exterior with Drone Overhead',
    aiModel: 'Image AI',
    description: 'The image showcases the modern architecture of the Hamm Institute, featuring sleek glass walls and angular design elements. A drone is seen flying above the building, adding a technological aspect to the scene. The surrounding landscape includes well-maintained greenery and a clear, sunny sky, emphasizing the institutes contemporary and innovative atmosphere.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734465973/Hamm_institute_exterior_cnqofe.png',
    type: 'image'
  },
 {
    id: 'img24',
    title: 'Snowfall Enchantress',
    aiModel: 'Image AI',
    description: 'The image portrays a striking character with silver-blue hair and piercing blue eyes, standing amidst a snowy, moonlit landscape. She is adorned in an intricately detailed black outfit with shimmering blue accents, evoking a sense of elegance and mystique. The falling snow and soft glow surrounding her enhance the magical and ethereal atmosphere.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1735059048/Leonardo_Anime_XL_In_the_heart_of_a_decaying_Snow_a_grungy_maj_2_uzw2tg.jpg',
    type: 'image'
  },

   // Stable Diffusion Artwork
  {
    id: 'sd1',
    title: 'Neural Evolution',
    aiModel: 'Stable Diffusion',
    description: '',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734214789/1214_a9dspv.gif',
    type: 'image'
  },
  {
    id: 'sd2',
    title: 'Neural Evolution',
    aiModel: 'Stable Diffusion',
    description: '',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1735077013/1224_14_felk5c.gif',
    type: 'image'
  },
   {
    id: 'sd3',
    title: 'Neural Evolution',
    aiModel: 'Stable Diffusion',
    description: '',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1735077014/1224_15_lqszf5.gif',
    type: 'image'
  },
  // Video AI Artworks
  {
    id: 'v1',
    title: 'Dual Realities: Man Between Worlds',
    aiModel: 'Video AI',
    description: 'The image features a man standing in the center, flanked by two opposing profiles displayed on glowing digital panels—one in cool blue tones and the other in vibrant pink. Lines of code run vertically in the background, emphasizing a futuristic, tech-driven theme. The composition suggests a narrative of choice, conflict, or exploration between contrasting realities.',
    type: 'video',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1735060366/1224_1_dykmn2.gif'
  },
  {
    id: 'v2',
    title: 'Innovation at OSU',
    aiModel: 'Video AI',
    description: 'The image showcases the grand facade of a university building at OSU, with a central dome and symmetrical wings, surrounded by well-manicured greenery. The sky above features a stunning sunset with vibrant hues of orange and blue, complementing the bold "Innovation at OSU" text displayed prominently in bright orange. The scene highlights a focus on education, innovation, and progress.',
    type: 'video',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734234342/1214_7_q7heha.gif',
  },
  {
    id: 'v3',
    title: 'Digital Metamorphosis',
    aiModel: 'Video AI',
    description: 'Seamless blend of real and artificial elements in a continuous flow of visual transformation.',
    type: 'video',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734234259/1214_5_cltwry.gif',
    createdAt: '2024-03-13'
  },
   {
    id: 'v4',
    title: 'Radiant Sunset Over Ocean Waves',
    aiModel: 'Video AI',
    description: 'The image captures a breathtaking sunset over a vibrant ocean, with waves gently crashing onto the shore. The sky is ablaze with dramatic hues of orange, red, and pink blending into deep blue, with streaks of light illuminating the clouds. The serene yet dynamic scene evokes feelings of peace and awe at natures beauty.',
    type: 'video',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1735061737/1224_3_d3y712.gif',
  },
   {
    id: 'v5',
    title: 'Stargazing in a Field of Dreams',
    aiModel: 'Video AI',
    description: 'The image depicts a serene scene of a girl standing in a vibrant field of glowing blue flowers, gazing up at a magnificent night sky. The sky is illuminated with streaking meteors, a deep blue galaxy, and a radiant sunset fading along the horizon. The blend of colors and celestial elements creates a dreamlike and awe-inspiring atmosphere.',
    type: 'video',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1735061357/1224_2_yovfor.gif'
  },
  {
    id: 'v6',
    title: 'Tiny Kitten in Gentle Hands',
    aiModel: 'Video AI',
    description: 'The image features an adorable, fluffy gray kitten cradled delicately in a persons fingers. The kittens wide, curious eyes and soft fur give it an irresistibly endearing expression, while the gentle light enhances its tiny, fragile appearance. The composition radiates warmth, tenderness, and the innocence of a young animal.',
    type: 'video',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1735061963/1224_4_q3houw.gif'
  },
  {
    id: 'v7',
    title: 'Journey Beyond the Clouds',
    aiModel: 'Video AI',
    description: 'The image portrays a lone figure walking on a path of light amidst dramatic, swirling clouds, with a breathtaking celestial backdrop. A massive, glowing planet looms in the distance, surrounded by stars and cosmic light. The scene evokes a sense of wonder, mystery, and the infinite possibilities of exploration beyond the ordinary.',
    type: 'video',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1735062705/1224_5_xd3qsi.gif'
  },
  {
    id: 'v8',
    title: 'Flameborn: The Essence of Fire',
    aiModel: 'Video AI',
    description: 'The image depicts a powerful figure engulfed in flames, with fiery patterns glowing across her body, resembling molten lava. Her intense gaze and flowing hair, illuminated by the firelight, exude strength and mystique. The surrounding flames enhance the dramatic and elemental energy of the scene, symbolizing raw power and transformation.',
    type: 'video',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1735064419/1224_9_ald9gq.gif'
  },
  {
    id: 'v9',
    title: 'Ocean Breeze Elegance',
    aiModel: 'Video AI',
    description: 'The image features a graceful woman with flowing blue hair adorned in an intricate white and blue gown, evoking the movement of ocean waves. Her wide-brimmed hat and delicate floral accents complement her ethereal appearance, as birds and splashes of water swirl dynamically around her. The scene radiates serenity and beauty, capturing the essence of the sea in motion and design.',
    type: 'video',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1735064192/1224_8_hfgghx.gif'
  },
   {
    id: 'v10',
    title: 'Ocean Within the Apple',
    aiModel: 'Video AI',
    description: 'A crystal-clear glass apple encapsulates a stunning seascape, with waves crashing under a vibrant sunset. The reflection of the golden sky on the apples surface creates a mesmerizing blend of art and nature, symbolizing a world within.',
    type: 'video',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1735064943/1224_10_xopb2k.gif'
  },
   {
    id: 'v11',
    title: 'Starlit Voyage',
    aiModel: 'Video AI',
    description: 'A majestic sailing ship glides across the ocean under a breathtaking cosmic sky filled with stars and glowing nebulae. The warm lights from the ship contrast beautifully with the cool blues of the water and sky, evoking a sense of adventure and wonder.',
    type: 'video',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1735065520/1224_13_lmu9zy.gif'
  },
   {
    id: 'v12',
    title: 'Bioluminescent Shoreline',
    aiModel: 'Video AI',
    description: 'A tranquil beach glows with bioluminescent waves under a serene, moonlit sky. Golden reflections ripple along the wet sand, creating a magical interplay of light and color against the soft, dark horizon.',
    type: 'video',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1735064940/1224_12_qtwsus.gif'
  },
  
  // DALL-E Artworks
  {
    id: 'dal1',
    title: 'Neural Network Visualization',
    aiModel: 'dall-e',
    description: 'A stunning visualization of neural networks with interconnected nodes and pathways.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734223253/DALL_E_2024-12-14_17.39.04_-_A_cinematic_image_featuring_a_majestic_university_campus_with_a_futuristic_twist._The_backdrop_showcases_the_text_The_Innovation_Foundation_at_OSU_i_howfkg.webp',
    createdAt: '2024-03-18',
    type: 'image'
  },
  {
    id: 'dal2',
    title: 'AI Learning Patterns',
    aiModel: 'dall-e',
    description: 'Abstract representation of AI learning patterns and data processing.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734223264/DALL_E_2024-12-14_17.43.40_-_A_cinematic_image_featuring_a_majestic_university_campus_with_a_futuristic_twist._The_backdrop_showcases_the_text_The_Innovation_Foundation_at_OSU_i_z9lzpt.webp',
    createdAt: '2024-03-17',
    type: 'image'
  }
];