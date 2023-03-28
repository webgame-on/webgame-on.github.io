<?xml version="1.0" encoding="UTF-8"?>
<data version="1.0">
    <struct type="Settings">
        <key>fileFormatVersion</key>
        <int>6</int>
        <key>texturePackerVersion</key>
        <string>7.0.2</string>
        <key>autoSDSettings</key>
        <array>
            <struct type="AutoSDSettings">
                <key>scale</key>
                <double>1</double>
                <key>extension</key>
                <string></string>
                <key>spriteFilter</key>
                <string></string>
                <key>acceptFractionalValues</key>
                <false/>
                <key>maxTextureSize</key>
                <QSize>
                    <key>width</key>
                    <int>-1</int>
                    <key>height</key>
                    <int>-1</int>
                </QSize>
            </struct>
        </array>
        <key>allowRotation</key>
        <false/>
        <key>shapeDebug</key>
        <false/>
        <key>dpi</key>
        <uint>72</uint>
        <key>dataFormat</key>
        <string>phaser</string>
        <key>textureFileName</key>
        <filename></filename>
        <key>flipPVR</key>
        <false/>
        <key>pvrQualityLevel</key>
        <uint>3</uint>
        <key>astcQualityLevel</key>
        <uint>2</uint>
        <key>basisUniversalQualityLevel</key>
        <uint>2</uint>
        <key>etc1QualityLevel</key>
        <uint>70</uint>
        <key>etc2QualityLevel</key>
        <uint>70</uint>
        <key>dxtCompressionMode</key>
        <enum type="SettingsBase::DxtCompressionMode">DXT_PERCEPTUAL</enum>
        <key>ditherType</key>
        <enum type="SettingsBase::DitherType">PngQuantLow</enum>
        <key>backgroundColor</key>
        <uint>0</uint>
        <key>libGdx</key>
        <struct type="LibGDX">
            <key>filtering</key>
            <struct type="LibGDXFiltering">
                <key>x</key>
                <enum type="LibGDXFiltering::Filtering">Linear</enum>
                <key>y</key>
                <enum type="LibGDXFiltering::Filtering">Linear</enum>
            </struct>
        </struct>
        <key>shapePadding</key>
        <uint>2</uint>
        <key>jpgQuality</key>
        <uint>80</uint>
        <key>pngOptimizationLevel</key>
        <uint>1</uint>
        <key>webpQualityLevel</key>
        <uint>101</uint>
        <key>textureSubPath</key>
        <string></string>
        <key>textureFormat</key>
        <enum type="SettingsBase::TextureFormat">png8</enum>
        <key>borderPadding</key>
        <uint>2</uint>
        <key>maxTextureSize</key>
        <QSize>
            <key>width</key>
            <int>1024</int>
            <key>height</key>
            <int>1024</int>
        </QSize>
        <key>fixedTextureSize</key>
        <QSize>
            <key>width</key>
            <int>-1</int>
            <key>height</key>
            <int>-1</int>
        </QSize>
        <key>algorithmSettings</key>
        <struct type="AlgorithmSettings">
            <key>algorithm</key>
            <enum type="AlgorithmSettings::AlgorithmId">MaxRects</enum>
            <key>freeSizeMode</key>
            <enum type="AlgorithmSettings::AlgorithmFreeSizeMode">Best</enum>
            <key>sizeConstraints</key>
            <enum type="AlgorithmSettings::SizeConstraints">AnySize</enum>
            <key>forceSquared</key>
            <false/>
            <key>maxRects</key>
            <struct type="AlgorithmMaxRectsSettings">
                <key>heuristic</key>
                <enum type="AlgorithmMaxRectsSettings::Heuristic">Best</enum>
            </struct>
            <key>basic</key>
            <struct type="AlgorithmBasicSettings">
                <key>sortBy</key>
                <enum type="AlgorithmBasicSettings::SortBy">Best</enum>
                <key>order</key>
                <enum type="AlgorithmBasicSettings::Order">Ascending</enum>
            </struct>
            <key>polygon</key>
            <struct type="AlgorithmPolygonSettings">
                <key>alignToGrid</key>
                <uint>1</uint>
            </struct>
        </struct>
        <key>dataFileNames</key>
        <map type="GFileNameMap">
            <key>json</key>
            <struct type="DataFile">
                <key>name</key>
                <filename>atlas.json</filename>
            </struct>
        </map>
        <key>multiPackMode</key>
        <enum type="SettingsBase::MultiPackMode">MultiPackOff</enum>
        <key>forceIdenticalLayout</key>
        <false/>
        <key>outputFormat</key>
        <enum type="SettingsBase::OutputFormat">RGBA8888</enum>
        <key>alphaHandling</key>
        <enum type="SettingsBase::AlphaHandling">ClearTransparentPixels</enum>
        <key>contentProtection</key>
        <struct type="ContentProtection">
            <key>key</key>
            <string></string>
        </struct>
        <key>autoAliasEnabled</key>
        <false/>
        <key>trimSpriteNames</key>
        <true/>
        <key>prependSmartFolderName</key>
        <false/>
        <key>autodetectAnimations</key>
        <true/>
        <key>globalSpriteSettings</key>
        <struct type="SpriteSettings">
            <key>scale</key>
            <double>1</double>
            <key>scaleMode</key>
            <enum type="ScaleMode">Smooth</enum>
            <key>extrude</key>
            <uint>2</uint>
            <key>trimThreshold</key>
            <uint>1</uint>
            <key>trimMargin</key>
            <uint>2</uint>
            <key>trimMode</key>
            <enum type="SpriteSettings::TrimMode">Trim</enum>
            <key>tracerTolerance</key>
            <int>200</int>
            <key>heuristicMask</key>
            <false/>
            <key>defaultPivotPoint</key>
            <point_f>0.5,0.5</point_f>
            <key>writePivotPoints</key>
            <false/>
        </struct>
        <key>individualSpriteSettings</key>
        <map type="IndividualSpriteSettingsMap">
            <key type="filename">atlas/ball/0.png</key>
            <key type="filename">atlas/ball/1.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>spriteScale</key>
                <double>1</double>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>7,7,14,14</rect>
                <key>scale9Paddings</key>
                <rect>7,7,14,14</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
            <key type="filename">atlas/border/0.png</key>
            <key type="filename">atlas/border/1.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>spriteScale</key>
                <double>1</double>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>4,8,8,16</rect>
                <key>scale9Paddings</key>
                <rect>4,8,8,16</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
            <key type="filename">atlas/grid.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>spriteScale</key>
                <double>1</double>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>139,69,278,138</rect>
                <key>scale9Paddings</key>
                <rect>139,69,278,138</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
            <key type="filename">atlas/platform/0.png</key>
            <key type="filename">atlas/platform/1.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>spriteScale</key>
                <double>1</double>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>30,7,60,15</rect>
                <key>scale9Paddings</key>
                <rect>30,7,60,15</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
            <key type="filename">atlas/platform/background.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>spriteScale</key>
                <double>1</double>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>120,30,240,60</rect>
                <key>scale9Paddings</key>
                <rect>120,30,240,60</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
            <key type="filename">atlas/tile/blank/dot/0.png</key>
            <key type="filename">atlas/tile/hover/dot/0.png</key>
            <key type="filename">atlas/tile/stripe/dot/0.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>spriteScale</key>
                <double>1</double>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>10,10,20,20</rect>
                <key>scale9Paddings</key>
                <rect>10,10,20,20</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
            <key type="filename">atlas/tile/blank/i/0.png</key>
            <key type="filename">atlas/tile/hover/i/0.png</key>
            <key type="filename">atlas/tile/stripe/i/0.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>spriteScale</key>
                <double>1</double>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>10,40,20,80</rect>
                <key>scale9Paddings</key>
                <rect>10,40,20,80</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
            <key type="filename">atlas/tile/blank/i/1.png</key>
            <key type="filename">atlas/tile/hover/i/1.png</key>
            <key type="filename">atlas/tile/stripe/i/1.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>spriteScale</key>
                <double>1</double>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>40,10,80,20</rect>
                <key>scale9Paddings</key>
                <rect>40,10,80,20</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
            <key type="filename">atlas/tile/blank/j/0.png</key>
            <key type="filename">atlas/tile/blank/j/2.png</key>
            <key type="filename">atlas/tile/blank/l/0.png</key>
            <key type="filename">atlas/tile/blank/l/2.png</key>
            <key type="filename">atlas/tile/blank/s/0.png</key>
            <key type="filename">atlas/tile/blank/t/0.png</key>
            <key type="filename">atlas/tile/blank/t/2.png</key>
            <key type="filename">atlas/tile/blank/z/0.png</key>
            <key type="filename">atlas/tile/hover/j/0.png</key>
            <key type="filename">atlas/tile/hover/j/2.png</key>
            <key type="filename">atlas/tile/hover/l/0.png</key>
            <key type="filename">atlas/tile/hover/l/2.png</key>
            <key type="filename">atlas/tile/hover/s/0.png</key>
            <key type="filename">atlas/tile/hover/t/0.png</key>
            <key type="filename">atlas/tile/hover/t/2.png</key>
            <key type="filename">atlas/tile/hover/z/0.png</key>
            <key type="filename">atlas/tile/stripe/j/0.png</key>
            <key type="filename">atlas/tile/stripe/j/2.png</key>
            <key type="filename">atlas/tile/stripe/l/0.png</key>
            <key type="filename">atlas/tile/stripe/l/2.png</key>
            <key type="filename">atlas/tile/stripe/s/0.png</key>
            <key type="filename">atlas/tile/stripe/t/0.png</key>
            <key type="filename">atlas/tile/stripe/t/2.png</key>
            <key type="filename">atlas/tile/stripe/z/0.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>spriteScale</key>
                <double>1</double>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>20,30,40,60</rect>
                <key>scale9Paddings</key>
                <rect>20,30,40,60</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
            <key type="filename">atlas/tile/blank/j/1.png</key>
            <key type="filename">atlas/tile/blank/j/3.png</key>
            <key type="filename">atlas/tile/blank/l/1.png</key>
            <key type="filename">atlas/tile/blank/l/3.png</key>
            <key type="filename">atlas/tile/blank/s/1.png</key>
            <key type="filename">atlas/tile/blank/t/1.png</key>
            <key type="filename">atlas/tile/blank/t/3.png</key>
            <key type="filename">atlas/tile/blank/z/1.png</key>
            <key type="filename">atlas/tile/hover/j/1.png</key>
            <key type="filename">atlas/tile/hover/j/3.png</key>
            <key type="filename">atlas/tile/hover/l/1.png</key>
            <key type="filename">atlas/tile/hover/l/3.png</key>
            <key type="filename">atlas/tile/hover/s/1.png</key>
            <key type="filename">atlas/tile/hover/t/1.png</key>
            <key type="filename">atlas/tile/hover/t/3.png</key>
            <key type="filename">atlas/tile/hover/z/1.png</key>
            <key type="filename">atlas/tile/stripe/j/1.png</key>
            <key type="filename">atlas/tile/stripe/j/3.png</key>
            <key type="filename">atlas/tile/stripe/l/1.png</key>
            <key type="filename">atlas/tile/stripe/l/3.png</key>
            <key type="filename">atlas/tile/stripe/s/1.png</key>
            <key type="filename">atlas/tile/stripe/t/1.png</key>
            <key type="filename">atlas/tile/stripe/t/3.png</key>
            <key type="filename">atlas/tile/stripe/z/1.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>spriteScale</key>
                <double>1</double>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>30,20,60,40</rect>
                <key>scale9Paddings</key>
                <rect>30,20,60,40</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
            <key type="filename">atlas/tile/blank/o/0.png</key>
            <key type="filename">atlas/tile/hover/o/0.png</key>
            <key type="filename">atlas/tile/stripe/o/0.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>spriteScale</key>
                <double>1</double>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>20,20,40,40</rect>
                <key>scale9Paddings</key>
                <rect>20,20,40,40</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
        </map>
        <key>fileLists</key>
        <map type="SpriteSheetMap">
            <key>default</key>
            <struct type="SpriteSheet">
                <key>files</key>
                <array>
                    <filename>atlas</filename>
                </array>
            </struct>
        </map>
        <key>ignoreFileList</key>
        <array/>
        <key>replaceList</key>
        <array/>
        <key>ignoredWarnings</key>
        <array/>
        <key>commonDivisorX</key>
        <uint>1</uint>
        <key>commonDivisorY</key>
        <uint>1</uint>
        <key>packNormalMaps</key>
        <false/>
        <key>autodetectNormalMaps</key>
        <true/>
        <key>normalMapFilter</key>
        <string></string>
        <key>normalMapSuffix</key>
        <string></string>
        <key>normalMapSheetFileName</key>
        <filename></filename>
        <key>exporterProperties</key>
        <map type="ExporterProperties"/>
    </struct>
</data>
