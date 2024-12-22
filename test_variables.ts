export const TEST_VARIABLES = {
  // Image generation parameters
  IMAGE_PARAMS: {
    width: 1024,
    height: 1024,
    steps: 25,
    cfg_scale: 8,
    sampler: 'euler',
    seed: Math.floor(Math.random() * 1000000000)
  },

  // Test prompts for image generation
  TEST_PROMPTS: [
    'anime character, standing pose, casual outfit, detailed background',
    'portrait shot, character smiling, school uniform, cherry blossoms',
    'action pose, dynamic lighting, urban background, detailed clothing'
  ],

  // Test tags for searching
  SEARCH_TAGS: [
    'safe',
    'rating:general',
    'solo',
    'scenery',
    'outfit',
    'character'
  ],

  // Test filters
  FILTERS: {
    minScore: 100,
    maxResults: 20,
    sortBy: 'score',
    rating: 'general'
  }
};

export const MODEL_CONFIG = {
  name: 'hf.co/QuantFactory/Peach-9B-8k-Roleplay-GGUF:Q5_K_M',
  provider: 'ollama',
  endpoint: 'http://localhost:11434/api/generate'
}; 