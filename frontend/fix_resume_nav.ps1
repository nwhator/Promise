$file = 'src\app\resume\page.tsx'
$content = Get-Content $file -Raw

# Detect and replace the old nav pattern using a regex
$oldPattern = '      <nav class="hidden md:flex items-center gap-6 text-sm">\r\n        <a class="text-text-muted hover:text-primary transition-colors" href="/" target="_top">Home</a>\r\n        <a class="text-text-muted hover:text-primary transition-colors" href="/about" target="_top">About</a>\r\n        <a class="text-text-muted hover:text-primary transition-colors" href="/projects" target="_top">Projects</a>\r\n        <a class="text-text-muted hover:text-primary transition-colors" href="/services" target="_top">Services</a>\r\n        <a class="text-text-muted hover:text-primary transition-colors" href="/technologies" target="_top">Technologies</a>\r\n        <a class="text-text-muted hover:text-primary transition-colors" href="/resume" target="_top">Resume</a>\r\n        <a class="text-text-muted hover:text-primary transition-colors" href="/contact" target="_top">Contact</a>\r\n        <a class="text-text-muted hover:text-primary transition-colors" href="/blog" target="_top">Blog</a>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n</header>'

$newBlock = @'
      <nav class="hidden md:flex items-center gap-6 text-sm">
        <a class="text-slate-400 hover:text-primary transition-colors text-sm" href="/" target="_top">Home</a>
        <a class="text-slate-400 hover:text-primary transition-colors text-sm" href="/about" target="_top">About</a>
        <a class="text-slate-400 hover:text-primary transition-colors text-sm" href="/projects" target="_top">Projects</a>
        <a class="text-slate-400 hover:text-primary transition-colors text-sm" href="/services" target="_top">Services</a>
        <a class="text-slate-400 hover:text-primary transition-colors text-sm" href="/technologies" target="_top">Technologies</a>
        <a class="text-white font-bold text-sm" href="/resume" target="_top">Resume</a>
        <a class="text-slate-400 hover:text-primary transition-colors text-sm" href="/contact" target="_top">Contact</a>
        <a class="text-slate-400 hover:text-primary transition-colors text-sm" href="/blog" target="_top">Blog</a>
      </nav>

      <!-- Mobile Menu Button -->
      <button id="mobile-menu-btn" class="md:hidden text-white p-2">
        <span class="material-symbols-outlined">menu</span>
      </button>
    </div>
  </div>

  <!-- Mobile Nav Dropdown -->
  <div id="mobile-menu" class="hidden md:hidden bg-background-dark border-b border-white/10 absolute w-full left-0 top-16 z-50">
    <nav class="flex flex-col p-6 gap-6 text-[16px] font-bold">
      <a class="text-slate-400" href="/" target="_top">Home</a>
      <a class="text-slate-400" href="/about" target="_top">About</a>
      <a class="text-slate-400" href="/projects" target="_top">Projects</a>
      <a class="text-slate-400" href="/services" target="_top">Services</a>
      <a class="text-slate-400" href="/technologies" target="_top">Technologies</a>
      <a class="text-white" href="/resume" target="_top">Resume</a>
      <a class="text-slate-400" href="/contact" target="_top">Contact</a>
      <a class="text-slate-400" href="/blog" target="_top">Blog</a>
    </nav>
  </div>
</header>
<script>
  (function() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
    }
  })();
</script>
'@

# Replace using -replace with the literal string (escaped)
$escaped = [regex]::Escape($oldPattern)
if ($content -match $escaped) {
    Write-Host "Found old block (escaped regex match), replacing..."
    $newContent = $content -replace $escaped, $newBlock.Replace('\','\\')
    [System.IO.File]::WriteAllText((Resolve-Path $file).Path, $newContent)
    Write-Host "Done!"
} else {
    # Try a simpler grep-based approach
    Write-Host "Regex match failed, trying direct string replace..."
    $simpleOld = 'text-text-muted hover:text-primary transition-colors" href="/" target="_top">Home'
    if ($content.Contains($simpleOld)) {
        Write-Host "Simple match found!"
        # Use a multiline regex to replace the whole nav block
        $pattern = '(?s)      <nav class="hidden md:flex items-center gap-6 text-sm">.*?</header>'
        $newContent = [regex]::Replace($content, $pattern, $newBlock.TrimStart())
        [System.IO.File]::WriteAllText((Resolve-Path $file).Path, $newContent)
        Write-Host "Done with regex replace!"
    } else {
        Write-Host "Could not find the nav block. Check line endings."
    }
}
