import os
import re
import sys

# Industrial Governance Standards
BANNED_WORDS = [
    "game-changer", "next-gen", "revolutionary", "disruptive", "cutting-edge",
    "seamless", "unparalleled", "world-class", "innovative", "state-of-the-art",
    "ultimate", "best-in-class", "empowering", "synergy", "paradigm shift"
]

# Emojis are banned (SVG Icons only)
EMOJI_PATTERN = re.compile(r'[\U00010000-\U0010ffff]', flags=re.UNICODE)

def check_file(filepath):
    errors = []
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
            # Check for banned words
            for word in BANNED_WORDS:
                if word.lower() in content.lower():
                    errors.append(f"BANNED WORD FOUND: '{word}'")
            
            # Check for emojis
            if EMOJI_PATTERN.search(content):
                errors.append("EMOJI FOUND (Only SVG icons allowed)")
                
    except Exception as e:
        return [f"Error reading file: {e}"]
    return errors

def main():
    target_dirs = ['app', 'components', 'lib']
    total_errors = 0
    
    print("--- Aashirwad Engineers Governance Audit ---")
    
    for d in target_dirs:
        for root, _, files in os.walk(d):
            for file in files:
                if file.endswith(('.tsx', '.ts', '.md', '.css')):
                    path = os.path.join(root, file)
                    errors = check_file(path)
                    if errors:
                        print(f"\n[VIOLATION] {path}:")
                        for err in errors:
                            print(f"  - {err}")
                        total_errors += len(errors)
    
    if total_errors == 0:
        print("\nSUCCESS: Governance intact. Codebase is clean.")
        sys.exit(0)
    else:
        print(f"\nFAILURE: {total_errors} governance violations found.")
        sys.exit(1)

if __name__ == "__main__":
    main()
