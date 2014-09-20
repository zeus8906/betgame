<map version="1.0.1">
<!-- To view this file, download free mind mapping software FreeMind from http://freemind.sourceforge.net -->
<node CREATED="1410823608161" ID="ID_876444224" LINK="user_flow.mm" MODIFIED="1411226320270" STYLE="bubble" TEXT="Create Game">
<icon BUILTIN="full-1"/>
<node CREATED="1410823782016" MODIFIED="1410824693767" POSITION="right" STYLE="bubble" TEXT="Basic Details">
<icon BUILTIN="full-1"/>
<node BACKGROUND_COLOR="#ffcc00" CREATED="1410823852939" MODIFIED="1410824693767" STYLE="bubble" TEXT="Tournament Service - get Tournament types">
<icon BUILTIN="full-3"/>
</node>
<node BACKGROUND_COLOR="#ffcc00" CREATED="1410823876094" MODIFIED="1410824693767" STYLE="bubble" TEXT="Validation Service - validate tournament name">
<icon BUILTIN="full-3"/>
</node>
</node>
<node CREATED="1410823792217" MODIFIED="1410824693767" POSITION="right" STYLE="bubble" TEXT="Groups and Teams">
<icon BUILTIN="full-1"/>
<node BACKGROUND_COLOR="#ffcc00" CREATED="1410823905525" MODIFIED="1410824693767" STYLE="bubble" TEXT="Tournament Service - get Tournament Structure">
<icon BUILTIN="full-3"/>
</node>
<node BACKGROUND_COLOR="#ffcc00" CREATED="1410823944856" MODIFIED="1410824693767" STYLE="bubble" TEXT="Validation Service - check team duplications/group details">
<icon BUILTIN="full-3"/>
</node>
</node>
<node CREATED="1410823814060" MODIFIED="1410824693767" POSITION="right" STYLE="bubble" TEXT="Fixtures">
<icon BUILTIN="full-1"/>
<node BACKGROUND_COLOR="#ffcc00" CREATED="1410823985091" MODIFIED="1410824693767" STYLE="bubble" TEXT="Fixture Service - Calculate Fixture">
<icon BUILTIN="full-3"/>
</node>
<node BACKGROUND_COLOR="#ffcc00" CREATED="1410824053878" MODIFIED="1410824693767" STYLE="bubble" TEXT="Fixture Service - prefill dropdowns">
<icon BUILTIN="full-3"/>
</node>
<node CREATED="1410824004351" MODIFIED="1410824693767" STYLE="bubble" TEXT="Change Match details">
<icon BUILTIN="full-2"/>
<node BACKGROUND_COLOR="#ffcc00" CREATED="1410824019041" MODIFIED="1410824693767" STYLE="bubble" TEXT="Fixture Service - Recalculate Fixture">
<icon BUILTIN="full-3"/>
</node>
<node BACKGROUND_COLOR="#ffcc00" CREATED="1410824034499" MODIFIED="1410824693767" STYLE="bubble" TEXT="Validation Service - Validate new Fixture">
<icon BUILTIN="full-3"/>
</node>
</node>
</node>
<node CREATED="1410823825604" MODIFIED="1410824693768" POSITION="right" STYLE="bubble" TEXT="Rules">
<icon BUILTIN="full-1"/>
<node BACKGROUND_COLOR="#ffcc00" CREATED="1410824077321" MODIFIED="1410824693768" STYLE="bubble" TEXT="Game Service - get Default rules">
<icon BUILTIN="full-3"/>
</node>
<node CREATED="1410824088456" MODIFIED="1410824693768" STYLE="bubble" TEXT="Submit">
<icon BUILTIN="full-2"/>
<node BACKGROUND_COLOR="#ffcc00" CREATED="1410824100693" MODIFIED="1410824693768" STYLE="bubble" TEXT="Validation Service - Validate rules">
<icon BUILTIN="full-3"/>
</node>
<node BACKGROUND_COLOR="#ffcc00" CREATED="1410824120710" MODIFIED="1410824693768" STYLE="bubble" TEXT="Game Service - Save rules">
<icon BUILTIN="full-3"/>
</node>
</node>
</node>
<node CREATED="1410823841547" MODIFIED="1410824693768" POSITION="right" STYLE="bubble" TEXT="Attendes">
<icon BUILTIN="full-1"/>
<node BACKGROUND_COLOR="#ffcc00" CREATED="1410824140096" MODIFIED="1410824693768" STYLE="bubble" TEXT="User Service - Get user by name">
<icon BUILTIN="full-3"/>
</node>
<node BACKGROUND_COLOR="#ffcc00" CREATED="1410824154364" MODIFIED="1410824693768" STYLE="bubble" TEXT="Validation Service - Validate attendes (e.g.: at least two attendes, no duplicates, etc)">
<icon BUILTIN="full-3"/>
</node>
</node>
<node CREATED="1410824198857" MODIFIED="1410824693768" POSITION="right" STYLE="bubble" TEXT="Submit">
<icon BUILTIN="full-1"/>
<node BACKGROUND_COLOR="#ffcc00" CREATED="1410824205293" MODIFIED="1410824693768" STYLE="bubble" TEXT="Tournament Service - Commit">
<icon BUILTIN="full-3"/>
</node>
<node BACKGROUND_COLOR="#ffcc00" CREATED="1410824240768" MODIFIED="1410824693768" STYLE="bubble" TEXT="Game Service - Commit">
<icon BUILTIN="full-3"/>
</node>
<node BACKGROUND_COLOR="#ffcc00" CREATED="1410824247800" MODIFIED="1410824785324" STYLE="bubble" TEXT="Message Service - Send notification to attendes">
<richcontent TYPE="NOTE"><html>
  <head>
    
  </head>
  <body>
    <p>
      1 Module
    </p>
    <p>
      2 Event
    </p>
    <p>
      3 Method call
    </p>
  </body>
</html></richcontent>
<icon BUILTIN="full-3"/>
</node>
</node>
</node>
</map>
