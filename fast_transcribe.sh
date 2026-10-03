#!/usr/bin/env bash
# Blazing Fast Reel Subtitle Generator (C++ Metal GPU Engine)
# Usage: ./fast_transcribe.sh "video.mp4" [optional_prompt]

set -e

VIDEO="$1"
PROMPT="${2:-AI, LLM, JEV, decision, prompt, model, easy, game-changer}"

if [ -z "$VIDEO" ] || [ ! -f "$VIDEO" ]; then
    echo "Usage: ./fast_transcribe.sh <path_to_video>"
    exit 1
fi

DIRNAME=$(dirname "$VIDEO")
BASENAME=$(basename "$VIDEO")
FILENAME="${BASENAME%.*}"
WAV_FILE="/tmp/${FILENAME}_16k.wav"
MODEL_DIR="$HOME/.whisper-models"
MODEL_PATH="$MODEL_DIR/ggml-base.bin"
OUT_SRT="$DIRNAME/$FILENAME.srt"

echo "⚡ Fast C++ Metal Whisper Transcriber"
echo "🎥 Input : $VIDEO"
echo "📝 Target: $OUT_SRT"

# 1. Ensure Model exists (140MB fast download if missing)
if [ ! -f "$MODEL_PATH" ]; then
    mkdir -p "$MODEL_DIR"
    echo "📥 Downloading ggml-base model (~140MB)..."
    curl -L --progress-bar -o "$MODEL_PATH" "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin"
fi

# 2. Extract 16kHz mono audio using ffmpeg (takes ~0.2s)
echo "🔊 Extracting audio stream..."
ffmpeg -y -v error -i "$VIDEO" -ar 16000 -ac 1 -c:a pcm_s16le "$WAV_FILE"

# 3. Run whisper-cli (C++ with Apple Silicon Metal acceleration)
echo "🚀 Transcribing on Apple M1 Metal GPU..."
whisper-cli \
    -m "$MODEL_PATH" \
    -f "$WAV_FILE" \
    -osrt \
    -of "$DIRNAME/$FILENAME" \
    -l auto \
    -ml 42 \
    -sow \
    --prompt "$PROMPT" \
    -np

# Clean temporary wav
rm -f "$WAV_FILE"

echo "✅ Done! Captions saved to: $OUT_SRT"
