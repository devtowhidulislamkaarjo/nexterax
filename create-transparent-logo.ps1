Add-Type -AssemblyName System.Drawing

$source = Join-Path $PSScriptRoot "nexterax-digital-logo.jpeg"
$target = Join-Path $PSScriptRoot "nexterax-digital-logo.png"

$inputBitmap = [System.Drawing.Bitmap]::FromFile($source)
$outputBitmap = New-Object System.Drawing.Bitmap $inputBitmap.Width, $inputBitmap.Height, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $inputBitmap.Height; $y++) {
  for ($x = 0; $x -lt $inputBitmap.Width; $x++) {
    $pixel = $inputBitmap.GetPixel($x, $y)
    $minChannel = [Math]::Min($pixel.R, [Math]::Min($pixel.G, $pixel.B))
    $maxChannel = [Math]::Max($pixel.R, [Math]::Max($pixel.G, $pixel.B))
    $spread = $maxChannel - $minChannel

    if ($minChannel -gt 246 -and $spread -lt 16) {
      $alpha = 0
    } elseif ($minChannel -gt 226 -and $spread -lt 24) {
      $alpha = [Math]::Max(0, [Math]::Min(255, ($maxChannel - 226) * 8))
      $alpha = 255 - $alpha
    } else {
      $alpha = 255
    }

    $newPixel = [System.Drawing.Color]::FromArgb($alpha, $pixel.R, $pixel.G, $pixel.B)
    $outputBitmap.SetPixel($x, $y, $newPixel)
  }
}

$outputBitmap.Save($target, [System.Drawing.Imaging.ImageFormat]::Png)
$inputBitmap.Dispose()
$outputBitmap.Dispose()
