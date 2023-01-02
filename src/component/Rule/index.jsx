import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default ({open, handleCloseRule}) => {

    
    return (
        <Dialog
            open={open}
            onClose={handleCloseRule}
            scroll={'paper'}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">Regras e Conduta</DialogTitle>
            <DialogContent dividers={true}>
            <DialogContentText>
                <>
                    <div>
            <meta httpEquiv="Content-Type" content="text/html; charset=windows-1252" />
            <meta name="ProgId" content="Word.Document" />
            <meta name="Generator" content="Microsoft Word 15" />
            <meta name="Originator" content="Microsoft Word 15" />
            <link rel="File-List" href="USO%20DE%20IMAGEM_arquivos/filelist.xml" />
            {/*[if gte mso 9]><xml>
    <o:DocumentProperties>
    <o:Author>Huarlen Souza</o:Author>
    <o:Template>Normal</o:Template>
    <o:LastAuthor>Huarlen Souza</o:LastAuthor>
    <o:Revision>2</o:Revision>
    <o:TotalTime>26</o:TotalTime>
    <o:Created>2022-12-28T23:18:00Z</o:Created>
    <o:LastSaved>2022-12-28T23:44:00Z</o:LastSaved>
    <o:Pages>2</o:Pages>
    <o:Words>640</o:Words>
    <o:Characters>3456</o:Characters>
    <o:Lines>28</o:Lines>
    <o:Paragraphs>8</o:Paragraphs>
    <o:CharactersWithSpaces>4088</o:CharactersWithSpaces>
    <o:Version>16.00</o:Version>
    </o:DocumentProperties>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    </o:OfficeDocumentSettings>
    </xml><![endif]*/}
            <link rel="dataStoreItem" href="USO%20DE%20IMAGEM_arquivos/item0006.xml" target="USO%20DE%20IMAGEM_arquivos/props007.xml" />
            <link rel="themeData" href="USO%20DE%20IMAGEM_arquivos/themedata.thmx" />
            <link rel="colorSchemeMapping" href="USO%20DE%20IMAGEM_arquivos/colorschememapping.xml" />
            {/*[if gte mso 9]><xml>
    <w:WordDocument>
    <w:View>Print</w:View>
    <w:Zoom>110</w:Zoom>
    <w:SpellingState>Clean</w:SpellingState>
    <w:GrammarState>Clean</w:GrammarState>
    <w:TrackMoves>false</w:TrackMoves>
    <w:TrackFormatting/>
    <w:HyphenationZone>21</w:HyphenationZone>
    <w:PunctuationKerning/>
    <w:ValidateAgainstSchemas/>
    <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>
    <w:IgnoreMixedContent>false</w:IgnoreMixedContent>
    <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>
    <w:DoNotPromoteQF/>
    <w:LidThemeOther>PT-BR</w:LidThemeOther>
    <w:LidThemeAsian>X-NONE</w:LidThemeAsian>
    <w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript>
    <w:Compatibility>
    <w:BreakWrappedTables/>
    <w:SnapToGridInCell/>
    <w:WrapTextWithPunct/>
    <w:UseAsianBreakRules/>
    <w:DontGrowAutofit/>
    <w:SplitPgBreakAndParaMark/>
    <w:EnableOpenTypeKerning/>
    <w:DontFlipMirrorIndents/>
    <w:OverrideTableStyleHps/>
    </w:Compatibility>
    <m:mathPr>
    <m:mathFont m:val="Cambria Math"/>
    <m:brkBin m:val="before"/>
    <m:brkBinSub m:val="&#45;-"/>
    <m:smallFrac m:val="off"/>
    <m:dispDef/>
    <m:lMargin m:val="0"/>
    <m:rMargin m:val="0"/>
    <m:defJc m:val="centerGroup"/>
    <m:wrapIndent m:val="1440"/>
    <m:intLim m:val="subSup"/>
    <m:naryLim m:val="undOvr"/>
    </m:mathPr></w:WordDocument>
    </xml><![endif]*/}{/*[if gte mso 9]><xml>
    <w:LatentStyles DefLockedState="false" DefUnhideWhenUsed="false"
    DefSemiHidden="false" DefQFormat="false" DefPriority="99"
    LatentStyleCount="376">
    <w:LsdException Locked="false" Priority="0" QFormat="true" Name="Normal"/>
    <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 1"/>
    <w:LsdException Locked="false" Priority="9" SemiHidden="true"
    UnhideWhenUsed="true" QFormat="true" Name="heading 2"/>
    <w:LsdException Locked="false" Priority="9" SemiHidden="true"
    UnhideWhenUsed="true" QFormat="true" Name="heading 3"/>
    <w:LsdException Locked="false" Priority="9" SemiHidden="true"
    UnhideWhenUsed="true" QFormat="true" Name="heading 4"/>
    <w:LsdException Locked="false" Priority="9" SemiHidden="true"
    UnhideWhenUsed="true" QFormat="true" Name="heading 5"/>
    <w:LsdException Locked="false" Priority="9" SemiHidden="true"
    UnhideWhenUsed="true" QFormat="true" Name="heading 6"/>
    <w:LsdException Locked="false" Priority="9" SemiHidden="true"
    UnhideWhenUsed="true" QFormat="true" Name="heading 7"/>
    <w:LsdException Locked="false" Priority="9" SemiHidden="true"
    UnhideWhenUsed="true" QFormat="true" Name="heading 8"/>
    <w:LsdException Locked="false" Priority="9" SemiHidden="true"
    UnhideWhenUsed="true" QFormat="true" Name="heading 9"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="index 1"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="index 2"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="index 3"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="index 4"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="index 5"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="index 6"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="index 7"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="index 8"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="index 9"/>
    <w:LsdException Locked="false" Priority="39" SemiHidden="true"
    UnhideWhenUsed="true" Name="toc 1"/>
    <w:LsdException Locked="false" Priority="39" SemiHidden="true"
    UnhideWhenUsed="true" Name="toc 2"/>
    <w:LsdException Locked="false" Priority="39" SemiHidden="true"
    UnhideWhenUsed="true" Name="toc 3"/>
    <w:LsdException Locked="false" Priority="39" SemiHidden="true"
    UnhideWhenUsed="true" Name="toc 4"/>
    <w:LsdException Locked="false" Priority="39" SemiHidden="true"
    UnhideWhenUsed="true" Name="toc 5"/>
    <w:LsdException Locked="false" Priority="39" SemiHidden="true"
    UnhideWhenUsed="true" Name="toc 6"/>
    <w:LsdException Locked="false" Priority="39" SemiHidden="true"
    UnhideWhenUsed="true" Name="toc 7"/>
    <w:LsdException Locked="false" Priority="39" SemiHidden="true"
    UnhideWhenUsed="true" Name="toc 8"/>
    <w:LsdException Locked="false" Priority="39" SemiHidden="true"
    UnhideWhenUsed="true" Name="toc 9"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Normal Indent"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="footnote text"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="annotation text"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="header"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="footer"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="index heading"/>
    <w:LsdException Locked="false" Priority="35" SemiHidden="true"
    UnhideWhenUsed="true" QFormat="true" Name="caption"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="table of figures"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="envelope address"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="envelope return"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="footnote reference"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="annotation reference"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="line number"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="page number"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="endnote reference"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="endnote text"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="table of authorities"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="macro"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="toa heading"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="List"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="List Bullet"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="List Number"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="List 2"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="List 3"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="List 4"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="List 5"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="List Bullet 2"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="List Bullet 3"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="List Bullet 4"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="List Bullet 5"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="List Number 2"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="List Number 3"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="List Number 4"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="List Number 5"/>
    <w:LsdException Locked="false" Priority="10" QFormat="true" Name="Title"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Closing"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Signature"/>
    <w:LsdException Locked="false" Priority="1" SemiHidden="true"
    UnhideWhenUsed="true" Name="Default Paragraph Font"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Body Text"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Body Text Indent"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="List Continue"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="List Continue 2"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="List Continue 3"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="List Continue 4"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="List Continue 5"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Message Header"/>
    <w:LsdException Locked="false" Priority="11" QFormat="true" Name="Subtitle"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Salutation"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Date"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Body Text First Indent"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Body Text First Indent 2"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Note Heading"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Body Text 2"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Body Text 3"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Body Text Indent 2"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Body Text Indent 3"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Block Text"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Hyperlink"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="FollowedHyperlink"/>
    <w:LsdException Locked="false" Priority="22" QFormat="true" Name="Strong"/>
    <w:LsdException Locked="false" Priority="20" QFormat="true" Name="Emphasis"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Document Map"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Plain Text"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="E-mail Signature"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="HTML Top of Form"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="HTML Bottom of Form"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Normal (Web)"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="HTML Acronym"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="HTML Address"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="HTML Cite"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="HTML Code"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="HTML Definition"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="HTML Keyboard"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="HTML Preformatted"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="HTML Sample"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="HTML Typewriter"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="HTML Variable"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Normal Table"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="annotation subject"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="No List"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Outline List 1"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Outline List 2"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Outline List 3"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Simple 1"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Simple 2"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Simple 3"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Classic 1"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Classic 2"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Classic 3"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Classic 4"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Colorful 1"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Colorful 2"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Colorful 3"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Columns 1"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Columns 2"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Columns 3"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Columns 4"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Columns 5"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Grid 1"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Grid 2"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Grid 3"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Grid 4"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Grid 5"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Grid 6"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Grid 7"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Grid 8"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table List 1"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table List 2"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table List 3"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table List 4"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table List 5"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table List 6"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table List 7"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table List 8"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table 3D effects 1"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table 3D effects 2"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table 3D effects 3"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Contemporary"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Elegant"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Professional"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Subtle 1"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Subtle 2"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Web 1"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Web 2"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Web 3"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Balloon Text"/>
    <w:LsdException Locked="false" Priority="39" Name="Table Grid"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Table Theme"/>
    <w:LsdException Locked="false" SemiHidden="true" Name="Placeholder Text"/>
    <w:LsdException Locked="false" Priority="1" QFormat="true" Name="No Spacing"/>
    <w:LsdException Locked="false" Priority="60" Name="Light Shading"/>
    <w:LsdException Locked="false" Priority="61" Name="Light List"/>
    <w:LsdException Locked="false" Priority="62" Name="Light Grid"/>
    <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1"/>
    <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2"/>
    <w:LsdException Locked="false" Priority="65" Name="Medium List 1"/>
    <w:LsdException Locked="false" Priority="66" Name="Medium List 2"/>
    <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1"/>
    <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2"/>
    <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3"/>
    <w:LsdException Locked="false" Priority="70" Name="Dark List"/>
    <w:LsdException Locked="false" Priority="71" Name="Colorful Shading"/>
    <w:LsdException Locked="false" Priority="72" Name="Colorful List"/>
    <w:LsdException Locked="false" Priority="73" Name="Colorful Grid"/>
    <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 1"/>
    <w:LsdException Locked="false" Priority="61" Name="Light List Accent 1"/>
    <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 1"/>
    <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 1"/>
    <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 1"/>
    <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 1"/>
    <w:LsdException Locked="false" SemiHidden="true" Name="Revision"/>
    <w:LsdException Locked="false" Priority="34" QFormat="true"
    Name="List Paragraph"/>
    <w:LsdException Locked="false" Priority="29" QFormat="true" Name="Quote"/>
    <w:LsdException Locked="false" Priority="30" QFormat="true"
    Name="Intense Quote"/>
    <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 1"/>
    <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 1"/>
    <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 1"/>
    <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 1"/>
    <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 1"/>
    <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 1"/>
    <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 1"/>
    <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 1"/>
    <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 2"/>
    <w:LsdException Locked="false" Priority="61" Name="Light List Accent 2"/>
    <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 2"/>
    <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 2"/>
    <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 2"/>
    <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 2"/>
    <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 2"/>
    <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 2"/>
    <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 2"/>
    <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 2"/>
    <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 2"/>
    <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 2"/>
    <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 2"/>
    <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 2"/>
    <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 3"/>
    <w:LsdException Locked="false" Priority="61" Name="Light List Accent 3"/>
    <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 3"/>
    <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 3"/>
    <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 3"/>
    <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 3"/>
    <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 3"/>
    <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 3"/>
    <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 3"/>
    <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 3"/>
    <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 3"/>
    <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 3"/>
    <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 3"/>
    <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 3"/>
    <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 4"/>
    <w:LsdException Locked="false" Priority="61" Name="Light List Accent 4"/>
    <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 4"/>
    <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 4"/>
    <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 4"/>
    <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 4"/>
    <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 4"/>
    <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 4"/>
    <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 4"/>
    <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 4"/>
    <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 4"/>
    <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 4"/>
    <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 4"/>
    <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 4"/>
    <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 5"/>
    <w:LsdException Locked="false" Priority="61" Name="Light List Accent 5"/>
    <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 5"/>
    <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 5"/>
    <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 5"/>
    <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 5"/>
    <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 5"/>
    <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 5"/>
    <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 5"/>
    <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 5"/>
    <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 5"/>
    <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 5"/>
    <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 5"/>
    <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 5"/>
    <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 6"/>
    <w:LsdException Locked="false" Priority="61" Name="Light List Accent 6"/>
    <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 6"/>
    <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 6"/>
    <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 6"/>
    <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 6"/>
    <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 6"/>
    <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 6"/>
    <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 6"/>
    <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 6"/>
    <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 6"/>
    <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 6"/>
    <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 6"/>
    <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 6"/>
    <w:LsdException Locked="false" Priority="19" QFormat="true"
    Name="Subtle Emphasis"/>
    <w:LsdException Locked="false" Priority="21" QFormat="true"
    Name="Intense Emphasis"/>
    <w:LsdException Locked="false" Priority="31" QFormat="true"
    Name="Subtle Reference"/>
    <w:LsdException Locked="false" Priority="32" QFormat="true"
    Name="Intense Reference"/>
    <w:LsdException Locked="false" Priority="33" QFormat="true" Name="Book Title"/>
    <w:LsdException Locked="false" Priority="37" SemiHidden="true"
    UnhideWhenUsed="true" Name="Bibliography"/>
    <w:LsdException Locked="false" Priority="39" SemiHidden="true"
    UnhideWhenUsed="true" QFormat="true" Name="TOC Heading"/>
    <w:LsdException Locked="false" Priority="41" Name="Plain Table 1"/>
    <w:LsdException Locked="false" Priority="42" Name="Plain Table 2"/>
    <w:LsdException Locked="false" Priority="43" Name="Plain Table 3"/>
    <w:LsdException Locked="false" Priority="44" Name="Plain Table 4"/>
    <w:LsdException Locked="false" Priority="45" Name="Plain Table 5"/>
    <w:LsdException Locked="false" Priority="40" Name="Grid Table Light"/>
    <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light"/>
    <w:LsdException Locked="false" Priority="47" Name="Grid Table 2"/>
    <w:LsdException Locked="false" Priority="48" Name="Grid Table 3"/>
    <w:LsdException Locked="false" Priority="49" Name="Grid Table 4"/>
    <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark"/>
    <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful"/>
    <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful"/>
    <w:LsdException Locked="false" Priority="46"
    Name="Grid Table 1 Light Accent 1"/>
    <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 1"/>
    <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 1"/>
    <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 1"/>
    <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 1"/>
    <w:LsdException Locked="false" Priority="51"
    Name="Grid Table 6 Colorful Accent 1"/>
    <w:LsdException Locked="false" Priority="52"
    Name="Grid Table 7 Colorful Accent 1"/>
    <w:LsdException Locked="false" Priority="46"
    Name="Grid Table 1 Light Accent 2"/>
    <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 2"/>
    <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 2"/>
    <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 2"/>
    <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 2"/>
    <w:LsdException Locked="false" Priority="51"
    Name="Grid Table 6 Colorful Accent 2"/>
    <w:LsdException Locked="false" Priority="52"
    Name="Grid Table 7 Colorful Accent 2"/>
    <w:LsdException Locked="false" Priority="46"
    Name="Grid Table 1 Light Accent 3"/>
    <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 3"/>
    <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 3"/>
    <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 3"/>
    <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 3"/>
    <w:LsdException Locked="false" Priority="51"
    Name="Grid Table 6 Colorful Accent 3"/>
    <w:LsdException Locked="false" Priority="52"
    Name="Grid Table 7 Colorful Accent 3"/>
    <w:LsdException Locked="false" Priority="46"
    Name="Grid Table 1 Light Accent 4"/>
    <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 4"/>
    <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 4"/>
    <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 4"/>
    <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 4"/>
    <w:LsdException Locked="false" Priority="51"
    Name="Grid Table 6 Colorful Accent 4"/>
    <w:LsdException Locked="false" Priority="52"
    Name="Grid Table 7 Colorful Accent 4"/>
    <w:LsdException Locked="false" Priority="46"
    Name="Grid Table 1 Light Accent 5"/>
    <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 5"/>
    <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 5"/>
    <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 5"/>
    <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 5"/>
    <w:LsdException Locked="false" Priority="51"
    Name="Grid Table 6 Colorful Accent 5"/>
    <w:LsdException Locked="false" Priority="52"
    Name="Grid Table 7 Colorful Accent 5"/>
    <w:LsdException Locked="false" Priority="46"
    Name="Grid Table 1 Light Accent 6"/>
    <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 6"/>
    <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 6"/>
    <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 6"/>
    <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 6"/>
    <w:LsdException Locked="false" Priority="51"
    Name="Grid Table 6 Colorful Accent 6"/>
    <w:LsdException Locked="false" Priority="52"
    Name="Grid Table 7 Colorful Accent 6"/>
    <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light"/>
    <w:LsdException Locked="false" Priority="47" Name="List Table 2"/>
    <w:LsdException Locked="false" Priority="48" Name="List Table 3"/>
    <w:LsdException Locked="false" Priority="49" Name="List Table 4"/>
    <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark"/>
    <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful"/>
    <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful"/>
    <w:LsdException Locked="false" Priority="46"
    Name="List Table 1 Light Accent 1"/>
    <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 1"/>
    <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 1"/>
    <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 1"/>
    <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 1"/>
    <w:LsdException Locked="false" Priority="51"
    Name="List Table 6 Colorful Accent 1"/>
    <w:LsdException Locked="false" Priority="52"
    Name="List Table 7 Colorful Accent 1"/>
    <w:LsdException Locked="false" Priority="46"
    Name="List Table 1 Light Accent 2"/>
    <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 2"/>
    <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 2"/>
    <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 2"/>
    <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 2"/>
    <w:LsdException Locked="false" Priority="51"
    Name="List Table 6 Colorful Accent 2"/>
    <w:LsdException Locked="false" Priority="52"
    Name="List Table 7 Colorful Accent 2"/>
    <w:LsdException Locked="false" Priority="46"
    Name="List Table 1 Light Accent 3"/>
    <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 3"/>
    <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 3"/>
    <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 3"/>
    <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 3"/>
    <w:LsdException Locked="false" Priority="51"
    Name="List Table 6 Colorful Accent 3"/>
    <w:LsdException Locked="false" Priority="52"
    Name="List Table 7 Colorful Accent 3"/>
    <w:LsdException Locked="false" Priority="46"
    Name="List Table 1 Light Accent 4"/>
    <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 4"/>
    <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 4"/>
    <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 4"/>
    <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 4"/>
    <w:LsdException Locked="false" Priority="51"
    Name="List Table 6 Colorful Accent 4"/>
    <w:LsdException Locked="false" Priority="52"
    Name="List Table 7 Colorful Accent 4"/>
    <w:LsdException Locked="false" Priority="46"
    Name="List Table 1 Light Accent 5"/>
    <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 5"/>
    <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 5"/>
    <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 5"/>
    <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 5"/>
    <w:LsdException Locked="false" Priority="51"
    Name="List Table 6 Colorful Accent 5"/>
    <w:LsdException Locked="false" Priority="52"
    Name="List Table 7 Colorful Accent 5"/>
    <w:LsdException Locked="false" Priority="46"
    Name="List Table 1 Light Accent 6"/>
    <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 6"/>
    <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 6"/>
    <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 6"/>
    <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 6"/>
    <w:LsdException Locked="false" Priority="51"
    Name="List Table 6 Colorful Accent 6"/>
    <w:LsdException Locked="false" Priority="52"
    Name="List Table 7 Colorful Accent 6"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Mention"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Smart Hyperlink"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Hashtag"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Unresolved Mention"/>
    <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
    Name="Smart Link"/>
    </w:LatentStyles>
    </xml><![endif]*/}
            <style dangerouslySetInnerHTML={{__html: "\n<!--\n /* Font Definitions */\n @font-face\n\t{font-family:\"Cambria Math\";\n\tpanose-1:2 4 5 3 5 4 6 3 2 4;\n\tmso-font-charset:0;\n\tmso-generic-font-family:roman;\n\tmso-font-pitch:variable;\n\tmso-font-signature:-536869121 1107305727 33554432 0 415 0;}\n@font-face\n\t{font-family:Calibri;\n\tpanose-1:2 15 5 2 2 2 4 3 2 4;\n\tmso-font-charset:0;\n\tmso-generic-font-family:swiss;\n\tmso-font-pitch:variable;\n\tmso-font-signature:-469750017 -1073732485 9 0 511 0;}\n /* Style Definitions */\n p.MsoNormal, li.MsoNormal, div.MsoNormal\n\t{mso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmso-style-parent:\"\";\n\tmargin-top:0cm;\n\tmargin-right:0cm;\n\tmargin-bottom:8.0pt;\n\tmargin-left:0cm;\n\tline-height:107%;\n\tmso-pagination:widow-orphan;\n\tfont-size:11.0pt;\n\tfont-family:\"Calibri\",sans-serif;\n\tmso-ascii-font-family:Calibri;\n\tmso-ascii-theme-font:minor-latin;\n\tmso-fareast-font-family:Calibri;\n\tmso-fareast-theme-font:minor-latin;\n\tmso-hansi-font-family:Calibri;\n\tmso-hansi-theme-font:minor-latin;\n\tmso-bidi-font-family:\"Times New Roman\";\n\tmso-bidi-theme-font:minor-bidi;\n\tmso-fareast-language:EN-US;}\na:link, span.MsoHyperlink\n\t{mso-style-priority:99;\n\tcolor:#0563C1;\n\tmso-themecolor:hyperlink;\n\ttext-decoration:underline;\n\ttext-underline:single;}\na:visited, span.MsoHyperlinkFollowed\n\t{mso-style-noshow:yes;\n\tmso-style-priority:99;\n\tcolor:#954F72;\n\tmso-themecolor:followedhyperlink;\n\ttext-decoration:underline;\n\ttext-underline:single;}\np.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph\n\t{mso-style-priority:34;\n\tmso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmargin-top:0cm;\n\tmargin-right:0cm;\n\tmargin-bottom:8.0pt;\n\tmargin-left:36.0pt;\n\tmso-add-space:auto;\n\tline-height:107%;\n\tmso-pagination:widow-orphan;\n\tfont-size:11.0pt;\n\tfont-family:\"Calibri\",sans-serif;\n\tmso-ascii-font-family:Calibri;\n\tmso-ascii-theme-font:minor-latin;\n\tmso-fareast-font-family:Calibri;\n\tmso-fareast-theme-font:minor-latin;\n\tmso-hansi-font-family:Calibri;\n\tmso-hansi-theme-font:minor-latin;\n\tmso-bidi-font-family:\"Times New Roman\";\n\tmso-bidi-theme-font:minor-bidi;\n\tmso-fareast-language:EN-US;}\np.MsoListParagraphCxSpFirst, li.MsoListParagraphCxSpFirst, div.MsoListParagraphCxSpFirst\n\t{mso-style-priority:34;\n\tmso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmso-style-type:export-only;\n\tmargin-top:0cm;\n\tmargin-right:0cm;\n\tmargin-bottom:0cm;\n\tmargin-left:36.0pt;\n\tmso-add-space:auto;\n\tline-height:107%;\n\tmso-pagination:widow-orphan;\n\tfont-size:11.0pt;\n\tfont-family:\"Calibri\",sans-serif;\n\tmso-ascii-font-family:Calibri;\n\tmso-ascii-theme-font:minor-latin;\n\tmso-fareast-font-family:Calibri;\n\tmso-fareast-theme-font:minor-latin;\n\tmso-hansi-font-family:Calibri;\n\tmso-hansi-theme-font:minor-latin;\n\tmso-bidi-font-family:\"Times New Roman\";\n\tmso-bidi-theme-font:minor-bidi;\n\tmso-fareast-language:EN-US;}\np.MsoListParagraphCxSpMiddle, li.MsoListParagraphCxSpMiddle, div.MsoListParagraphCxSpMiddle\n\t{mso-style-priority:34;\n\tmso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmso-style-type:export-only;\n\tmargin-top:0cm;\n\tmargin-right:0cm;\n\tmargin-bottom:0cm;\n\tmargin-left:36.0pt;\n\tmso-add-space:auto;\n\tline-height:107%;\n\tmso-pagination:widow-orphan;\n\tfont-size:11.0pt;\n\tfont-family:\"Calibri\",sans-serif;\n\tmso-ascii-font-family:Calibri;\n\tmso-ascii-theme-font:minor-latin;\n\tmso-fareast-font-family:Calibri;\n\tmso-fareast-theme-font:minor-latin;\n\tmso-hansi-font-family:Calibri;\n\tmso-hansi-theme-font:minor-latin;\n\tmso-bidi-font-family:\"Times New Roman\";\n\tmso-bidi-theme-font:minor-bidi;\n\tmso-fareast-language:EN-US;}\np.MsoListParagraphCxSpLast, li.MsoListParagraphCxSpLast, div.MsoListParagraphCxSpLast\n\t{mso-style-priority:34;\n\tmso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmso-style-type:export-only;\n\tmargin-top:0cm;\n\tmargin-right:0cm;\n\tmargin-bottom:8.0pt;\n\tmargin-left:36.0pt;\n\tmso-add-space:auto;\n\tline-height:107%;\n\tmso-pagination:widow-orphan;\n\tfont-size:11.0pt;\n\tfont-family:\"Calibri\",sans-serif;\n\tmso-ascii-font-family:Calibri;\n\tmso-ascii-theme-font:minor-latin;\n\tmso-fareast-font-family:Calibri;\n\tmso-fareast-theme-font:minor-latin;\n\tmso-hansi-font-family:Calibri;\n\tmso-hansi-theme-font:minor-latin;\n\tmso-bidi-font-family:\"Times New Roman\";\n\tmso-bidi-theme-font:minor-bidi;\n\tmso-fareast-language:EN-US;}\n.MsoChpDefault\n\t{mso-style-type:export-only;\n\tmso-default-props:yes;\n\tmso-ascii-font-family:Calibri;\n\tmso-ascii-theme-font:minor-latin;\n\tmso-fareast-font-family:Calibri;\n\tmso-fareast-theme-font:minor-latin;\n\tmso-hansi-font-family:Calibri;\n\tmso-hansi-theme-font:minor-latin;\n\tmso-bidi-font-family:\"Times New Roman\";\n\tmso-bidi-theme-font:minor-bidi;\n\tmso-fareast-language:EN-US;}\n.MsoPapDefault\n\t{mso-style-type:export-only;\n\tmargin-bottom:8.0pt;\n\tline-height:107%;}\n@page WordSection1\n\t{size:595.3pt 841.9pt;\n\tmargin:36.0pt 36.0pt 36.0pt 36.0pt;\n\tmso-header-margin:35.4pt;\n\tmso-footer-margin:35.4pt;\n\tmso-paper-source:0;}\ndiv.WordSection1\n\t{page:WordSection1;}\n /* List Definitions */\n @list l0\n\t{mso-list-id:38022318;\n\tmso-list-template-ids:68550687;}\n@list l0:level1\n\t{mso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:18.0pt;\n\ttext-indent:-18.0pt;}\n@list l0:level2\n\t{mso-level-text:\"%1\\.%2\\.\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:39.6pt;\n\ttext-indent:-21.6pt;}\n@list l0:level3\n\t{mso-level-text:\"%1\\.%2\\.%3\\.\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:61.2pt;\n\ttext-indent:-25.2pt;}\n@list l0:level4\n\t{mso-level-text:\"%1\\.%2\\.%3\\.%4\\.\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:86.4pt;\n\ttext-indent:-32.4pt;}\n@list l0:level5\n\t{mso-level-text:\"%1\\.%2\\.%3\\.%4\\.%5\\.\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:111.6pt;\n\ttext-indent:-39.6pt;}\n@list l0:level6\n\t{mso-level-text:\"%1\\.%2\\.%3\\.%4\\.%5\\.%6\\.\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:136.8pt;\n\ttext-indent:-46.8pt;}\n@list l0:level7\n\t{mso-level-text:\"%1\\.%2\\.%3\\.%4\\.%5\\.%6\\.%7\\.\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:162.0pt;\n\ttext-indent:-54.0pt;}\n@list l0:level8\n\t{mso-level-text:\"%1\\.%2\\.%3\\.%4\\.%5\\.%6\\.%7\\.%8\\.\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:187.2pt;\n\ttext-indent:-61.2pt;}\n@list l0:level9\n\t{mso-level-text:\"%1\\.%2\\.%3\\.%4\\.%5\\.%6\\.%7\\.%8\\.%9\\.\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:216.0pt;\n\ttext-indent:-72.0pt;}\n@list l1\n\t{mso-list-id:337541931;\n\tmso-list-type:hybrid;\n\tmso-list-template-ids:-696903628 68550671 68550681 68550683 68550671 68550681 68550683 68550671 68550681 68550683;}\n@list l1:level1\n\t{mso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:71.25pt;\n\ttext-indent:-18.0pt;}\n@list l1:level2\n\t{mso-level-number-format:alpha-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:107.25pt;\n\ttext-indent:-18.0pt;}\n@list l1:level3\n\t{mso-level-number-format:roman-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:right;\n\tmargin-left:143.25pt;\n\ttext-indent:-9.0pt;}\n@list l1:level4\n\t{mso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:179.25pt;\n\ttext-indent:-18.0pt;}\n@list l1:level5\n\t{mso-level-number-format:alpha-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:215.25pt;\n\ttext-indent:-18.0pt;}\n@list l1:level6\n\t{mso-level-number-format:roman-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:right;\n\tmargin-left:251.25pt;\n\ttext-indent:-9.0pt;}\n@list l1:level7\n\t{mso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:287.25pt;\n\ttext-indent:-18.0pt;}\n@list l1:level8\n\t{mso-level-number-format:alpha-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:323.25pt;\n\ttext-indent:-18.0pt;}\n@list l1:level9\n\t{mso-level-number-format:roman-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:right;\n\tmargin-left:359.25pt;\n\ttext-indent:-9.0pt;}\n@list l2\n\t{mso-list-id:826819804;\n\tmso-list-template-ids:68550685;\n\tmso-list-style-id:1180923176;}\n@list l2:level1\n\t{mso-level-text:%1;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:18.0pt;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Times New Roman\",serif;\n\tcolor:windowtext;}\n@list l2:level2\n\t{mso-level-text:%2;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:36.0pt;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Times New Roman\",serif;\n\tcolor:windowtext;}\n@list l2:level3\n\t{mso-level-number-format:roman-lower;\n\tmso-level-text:\"%3\\)\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:54.0pt;\n\ttext-indent:-18.0pt;}\n@list l2:level4\n\t{mso-level-text:\"\\(%4\\)\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:72.0pt;\n\ttext-indent:-18.0pt;}\n@list l2:level5\n\t{mso-level-number-format:alpha-lower;\n\tmso-level-text:\"\\(%5\\)\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:90.0pt;\n\ttext-indent:-18.0pt;}\n@list l2:level6\n\t{mso-level-number-format:roman-lower;\n\tmso-level-text:\"\\(%6\\)\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:108.0pt;\n\ttext-indent:-18.0pt;}\n@list l2:level7\n\t{mso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:126.0pt;\n\ttext-indent:-18.0pt;}\n@list l2:level8\n\t{mso-level-number-format:alpha-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:144.0pt;\n\ttext-indent:-18.0pt;}\n@list l2:level9\n\t{mso-level-number-format:roman-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:162.0pt;\n\ttext-indent:-18.0pt;}\n@list l3\n\t{mso-list-id:1061296608;\n\tmso-list-template-ids:50890798;}\n@list l3:level1\n\t{mso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:22.7pt;\n\ttext-indent:-22.7pt;\n\tmso-ansi-font-size:16.0pt;}\n@list l3:level2\n\t{mso-level-text:\"%1\\.%2\\.\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:45.35pt;\n\ttext-indent:-25.5pt;}\n@list l3:level3\n\t{mso-level-text:\"%1\\.%2\\.%3\\.\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:73.7pt;\n\ttext-indent:-34.0pt;}\n@list l3:level4\n\t{mso-level-text:\"%1\\.%2\\.%3\\.%4\\.\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:77.4pt;\n\ttext-indent:-17.85pt;}\n@list l3:level5\n\t{mso-level-text:\"%1\\.%2\\.%3\\.%4\\.%5\\.\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:97.25pt;\n\ttext-indent:-17.85pt;}\n@list l3:level6\n\t{mso-level-text:\"%1\\.%2\\.%3\\.%4\\.%5\\.%6\\.\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:117.1pt;\n\ttext-indent:-17.85pt;}\n@list l3:level7\n\t{mso-level-text:\"%1\\.%2\\.%3\\.%4\\.%5\\.%6\\.%7\\.\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:136.95pt;\n\ttext-indent:-17.85pt;}\n@list l3:level8\n\t{mso-level-text:\"%1\\.%2\\.%3\\.%4\\.%5\\.%6\\.%7\\.%8\\.\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:156.8pt;\n\ttext-indent:-17.85pt;}\n@list l3:level9\n\t{mso-level-text:\"%1\\.%2\\.%3\\.%4\\.%5\\.%6\\.%7\\.%8\\.%9\\.\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:176.65pt;\n\ttext-indent:-17.85pt;}\n@list l4\n\t{mso-list-id:1180923176;\n\tmso-list-template-ids:68550685;\n\tmso-list-style-priority:99;\n\tmso-list-style-name:Estilo1;}\n@list l4:level1\n\t{mso-level-text:%1;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:18.0pt;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Times New Roman\",serif;\n\tcolor:windowtext;}\n@list l4:level2\n\t{mso-level-text:%2;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:36.0pt;\n\ttext-indent:-18.0pt;\n\tfont-family:\"Times New Roman\",serif;\n\tcolor:windowtext;}\n@list l4:level3\n\t{mso-level-number-format:roman-lower;\n\tmso-level-text:\"%3\\)\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:54.0pt;\n\ttext-indent:-18.0pt;}\n@list l4:level4\n\t{mso-level-text:\"\\(%4\\)\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:72.0pt;\n\ttext-indent:-18.0pt;}\n@list l4:level5\n\t{mso-level-number-format:alpha-lower;\n\tmso-level-text:\"\\(%5\\)\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:90.0pt;\n\ttext-indent:-18.0pt;}\n@list l4:level6\n\t{mso-level-number-format:roman-lower;\n\tmso-level-text:\"\\(%6\\)\";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:108.0pt;\n\ttext-indent:-18.0pt;}\n@list l4:level7\n\t{mso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:126.0pt;\n\ttext-indent:-18.0pt;}\n@list l4:level8\n\t{mso-level-number-format:alpha-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:144.0pt;\n\ttext-indent:-18.0pt;}\n@list l4:level9\n\t{mso-level-number-format:roman-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:162.0pt;\n\ttext-indent:-18.0pt;}\nol\n\t{margin-bottom:0cm;}\nul\n\t{margin-bottom:0cm;}\n-->\n" }} />
            {/*[if gte mso 10]>
    <style>
    /* Style Definitions * /
    table.MsoNormalTable
        {mso-style-name:"Tabela normal";
        mso-tstyle-rowband-size:0;
        mso-tstyle-colband-size:0;
        mso-style-noshow:yes;
        mso-style-priority:99;
        mso-style-parent:"";
        mso-padding-alt:0cm 5.4pt 0cm 5.4pt;
        mso-para-margin-top:0cm;
        mso-para-margin-right:0cm;
        mso-para-margin-bottom:8.0pt;
        mso-para-margin-left:0cm;
        line-height:107%;
        mso-pagination:widow-orphan;
        font-size:11.0pt;
        font-family:"Calibri",sans-serif;
        mso-ascii-font-family:Calibri;
        mso-ascii-theme-font:minor-latin;
        mso-hansi-font-family:Calibri;
        mso-hansi-theme-font:minor-latin;
        mso-bidi-font-family:"Times New Roman";
        mso-bidi-theme-font:minor-bidi;
        mso-fareast-language:EN-US;}
    </style>
    <![endif]*/}{/*[if gte mso 9]><xml>
    <o:shapedefaults v:ext="edit" spidmax="1026"/>
    </xml><![endif]*/}{/*[if gte mso 9]><xml>
    <o:shapelayout v:ext="edit">
    <o:idmap v:ext="edit" data="1"/>
    </o:shapelayout></xml><![endif]*/}
                <div className="WordSection1">
                <p className="MsoListParagraphCxSpFirst" style={{marginLeft: '22.7pt', msoAddSpace: 'auto', textIndent: '-22.7pt', msoList: 'l3 level1 lfo5'}}>{/*[if !supportLists]*/}<b><span style={{fontSize: '16.0pt', lineHeight: '107%', msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>1.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></b>{/*[endif]*/}<b><span style={{fontSize: '16.0pt', lineHeight: '107%'}}>USO DE IMAGEM<p /></span></b></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '0cm', marginLeft: '45.35pt', msoAddSpace: 'auto', textIndent: '-25.5pt', msoList: 'l3 level2 lfo5'}}>{/*[if !supportLists]*/}<b><span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>1.1.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></b>{/*[endif]*/}Todos
                    os participantes concordam que as imagens de suas lutas podem ser usadas
                    livremente pela organizadora, sem nenhuma restrição<b><p /></b></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '39.6pt', msoAddSpace: 'auto'}}><p>&nbsp;</p></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '22.7pt', msoAddSpace: 'auto', textIndent: '-22.7pt', msoList: 'l3 level1 lfo5'}}>{/*[if !supportLists]*/}<b><span style={{fontSize: '16.0pt', lineHeight: '107%', msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>2.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></b>{/*[endif]*/}<b><span style={{fontSize: '16.0pt', lineHeight: '107%'}}>DISCORD<p /></span></b></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '45.35pt', msoAddSpace: 'auto', textIndent: '-25.5pt', msoList: 'l3 level2 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>2.1.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Todos os competidores devem OBRIGATORIAMENTE
                    fazer parte do Discord Oficial do Evento (<a href="https://discord.gg/Sad5Z5bQ">https://discord.gg/Sad5Z5bQ</a>)</p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '39.6pt', msoAddSpace: 'auto'}}><p>&nbsp;</p></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '22.7pt', msoAddSpace: 'auto', textIndent: '-22.7pt', msoList: 'l3 level1 lfo5'}}>{/*[if !supportLists]*/}<b><span style={{fontSize: '16.0pt', lineHeight: '107%', msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>3.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></b>{/*[endif]*/}<b><span style={{fontSize: '16.0pt', lineHeight: '107%'}}>ARMAS, RESTRIÇÕES<p /></span></b></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '45.35pt', msoAddSpace: 'auto', textIndent: '-25.5pt', msoList: 'l3 level2 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>3.1.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}No momento o Bastão Vital está desabilitado para
                    Evento.<p /></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '45.35pt', msoAddSpace: 'auto', textIndent: '-25.5pt', msoList: 'l3 level2 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>3.2.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Nos campeonatos podem trocar as armas
                    registradas antes do Sorteio.<p /></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '45.35pt', msoAddSpace: 'auto', textIndent: '-25.5pt', msoList: 'l3 level2 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>3.3.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Isso será feito antes do processo da formação
                    das chaves, assim o competidor não tem como saber quem será seu oponente antes
                    do sorteio.<p /></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '73.7pt', msoAddSpace: 'auto', textIndent: '-34.0pt', msoList: 'l3 level3 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>3.3.1.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Depois do sorteio, o competidor não poderá
                    alterar mais as armas selecionadas.<p /></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '73.7pt', msoAddSpace: 'auto', textIndent: '-34.0pt', msoList: 'l3 level3 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>3.3.2.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Durante o evento, o competidor poderá alternar
                    os equipamentos da mesma arma registrada.<p /></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '45.35pt', msoAddSpace: 'auto', textIndent: '-25.5pt', msoList: 'l3 level2 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>3.4.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Somente competidores do nível 60 poderão
                    participar, caso esteja nível inferior, será desclassificado.<p /></p>
                <p className="MsoListParagraphCxSpLast" style={{marginLeft: '45.35pt', msoAddSpace: 'auto', textIndent: '-25.5pt', msoList: 'l3 level2 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>3.5.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Não existe restrição dos pontos de equipamentos
                    dos participantes e nenhum balanceamento com esse critério.<p /></p>
                <p className="MsoNormal"><p>&nbsp;</p></p>
                <p className="MsoListParagraphCxSpFirst" style={{marginLeft: '22.7pt', msoAddSpace: 'auto', textIndent: '-22.7pt', msoList: 'l3 level1 lfo5'}}>{/*[if !supportLists]*/}<b><span style={{fontSize: '16.0pt', lineHeight: '107%', msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>4.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></b>{/*[endif]*/}<b><span style={{fontSize: '16.0pt', lineHeight: '107%'}}>VAGAS E INSCRIÇÕES<p /></span></b></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '45.35pt', msoAddSpace: 'auto', textIndent: '-25.5pt', msoList: 'l3 level2 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>4.1.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}As inscrições para a Arena Aeternum são
                    gratuitas.<p /></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '45.35pt', msoAddSpace: 'auto', textIndent: '-25.5pt', msoList: 'l3 level2 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>4.2.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}O limite de vagas para cada campeonato será determinado
                    individualmente em cada competição, isso será exibido no próprio site a
                    formação do torneio.<p /></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '45.35pt', msoAddSpace: 'auto', textIndent: '-25.5pt', msoList: 'l3 level2 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>4.3.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Todas as inscrições são feitas através do site <a href="http://arenaaeternum.com.br/">http://arenaaeternum.com.br/</a><p /></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '45.35pt', msoAddSpace: 'auto', textIndent: '-25.5pt', msoList: 'l3 level2 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>4.4.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Todos os jogadores devem estar presente no
                    Discord com antecedência de 10 minutos antes da sua rodada para realizar
                    check-in.<p /></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '73.7pt', msoAddSpace: 'auto', textIndent: '-34.0pt', msoList: 'l3 level3 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>4.4.1.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Não há punição para cancelamento do Check-in
                    antes dos 10 minutos.<p /></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '73.7pt', msoAddSpace: 'auto', textIndent: '-34.0pt', msoList: 'l3 level3 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>4.4.2.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}O check-in poderá ser refeito mesmo após o
                    cancelamento, desde que ainda esteja dentro do prazo estipulado para rodada.<p /></p>
                <p className="MsoListParagraphCxSpLast" style={{marginLeft: '73.7pt', msoAddSpace: 'auto', textIndent: '-34.0pt', msoList: 'l3 level3 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>4.4.3.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Faltar a luta que já foi marcada irá resultar em
                    W.O.<p /></p>
                <p className="MsoNormal"><p>&nbsp;</p></p>
                <p className="MsoListParagraph" style={{marginLeft: '22.7pt', msoAddSpace: 'auto', textIndent: '-22.7pt', msoList: 'l3 level1 lfo5'}}>{/*[if !supportLists]*/}<b><span style={{fontSize: '16.0pt', lineHeight: '107%', msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>5.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></b>{/*[endif]*/}<b><span style={{fontSize: '16.0pt', lineHeight: '107%'}}>PARTIDAS<p /></span></b></p>
                <p className="MsoNormal"><p>&nbsp;</p></p>
                <p className="MsoListParagraphCxSpFirst" style={{marginLeft: '22.7pt', msoAddSpace: 'auto', textIndent: '-22.7pt', msoList: 'l3 level1 lfo5'}}>{/*[if !supportLists]*/}<b><span style={{fontSize: '16.0pt', lineHeight: '107%', msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>6.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></b>{/*[endif]*/}<b><span style={{fontSize: '16.0pt', lineHeight: '107%'}}>COMPORTAMENTO DENTRO DA ARENA<p /></span></b></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '73.7pt', msoAddSpace: 'auto', textIndent: '-34.0pt', msoList: 'l3 level3 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>6.1.1.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}É proibido qualquer comportamento ofensivo entre
                    os competidores dentro da Arena Aeternum como mensagens ofensivas e conduta de
                    ódio.<p /></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '73.7pt', msoAddSpace: 'auto', textIndent: '-34.0pt', msoList: 'l3 level3 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>6.1.2.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Não será permitido comportamento antijogo, do
                    tipo evitar combate de forma que seja IMPOSSÍVEL para oponente revidar etc.<p /></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '97.25pt', msoAddSpace: 'auto', textIndent: '-17.85pt', msoList: 'l3 level5 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>6.1.2.1.1.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Na primeira ocorrência o competidor receberá uma
                    advertência<p /></p>
                <p className="MsoListParagraphCxSpLast" style={{marginLeft: '97.25pt', msoAddSpace: 'auto', textIndent: '-17.85pt', msoList: 'l3 level5 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>6.1.2.1.2.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Na segunda ocorrência de comportamento ofensivo,
                    preconceituoso, racista etc. O competidor perde a partida. Essa contagem pode
                    se acumular se o competidor repetir esse comportamento em mais de uma partida,
                    nesse caso o competidor pode ser banido da competição ativa.<p /></p>
                <p className="MsoNormal"><p>&nbsp;</p></p>
                <p className="MsoListParagraphCxSpFirst" style={{marginLeft: '22.7pt', msoAddSpace: 'auto', textIndent: '-22.7pt', msoList: 'l3 level1 lfo5'}}>{/*[if !supportLists]*/}<b><span style={{fontSize: '16.0pt', lineHeight: '107%', msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>7.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></b>{/*[endif]*/}<b><span style={{fontSize: '16.0pt', lineHeight: '107%'}}>ATRASOS, FALTAS E WOS<p /></span></b></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '73.7pt', msoAddSpace: 'auto', textIndent: '-34.0pt', msoList: 'l3 level3 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>7.1.1.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Todos os competidores devem estar online 10
                    minutos antes das suas lutas.<p /></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '73.7pt', msoAddSpace: 'auto', textIndent: '-34.0pt', msoList: 'l3 level3 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>7.1.2.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Atrasos devem ser avisados com pelo menos 60
                    minutos de antecedência, o aviso deve ser feito através do Discord Oficial no
                    Canal #aviso-de-falta<p /></p>
                <p className="MsoListParagraphCxSpLast" style={{marginLeft: '73.7pt', msoAddSpace: 'auto', textIndent: '-34.0pt', msoList: 'l3 level3 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>7.1.3.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Caso o lutador não esteja presente no horário do
                    seu duelo, ela será considerada uma derrota W.O<p /></p>
                <p className="MsoNormal"><p>&nbsp;</p></p>
                <p className="MsoListParagraphCxSpFirst" style={{marginLeft: '22.7pt', msoAddSpace: 'auto', textIndent: '-22.7pt', msoList: 'l3 level1 lfo5'}}>{/*[if !supportLists]*/}<span style={{fontSize: '16.0pt', msoBidiFontSize: '11.0pt', lineHeight: '107%', msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>8.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span>{/*[endif]*/}PROBLEMAS
                    FORA DE PARTIDAS<p /></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '73.7pt', msoAddSpace: 'auto', textIndent: '-34.0pt', msoList: 'l3 level3 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>8.1.1.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Qualquer problema relacionado ao evento ou
                    duelos deve ser comunicado através do Discord Oficial na sala #problemas<p /></p>
                <p className="MsoListParagraphCxSpLast" style={{marginLeft: '73.7pt', msoAddSpace: 'auto', textIndent: '-34.0pt', msoList: 'l3 level3 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>8.1.2.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Problemas confidenciais devem ser enviados
                    através do DM de algum responsável pelo evento.<p /></p>
                <p className="MsoNormal" style={{textIndent: '35.25pt'}}><p>&nbsp;</p></p>
                <p className="MsoListParagraphCxSpFirst" style={{marginLeft: '22.7pt', msoAddSpace: 'auto', textIndent: '-22.7pt', msoList: 'l3 level1 lfo5'}}>{/*[if !supportLists]*/}<b><span style={{fontSize: '16.0pt', lineHeight: '107%', msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>9.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></b>{/*[endif]*/}<b><span style={{fontSize: '16.0pt', lineHeight: '107%'}}>CRASHS E PROBLEMAS DE CONEXÃO DURANTE
                        UMA PARTIDA<p /></span></b></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '73.7pt', msoAddSpace: 'auto', textIndent: '-34.0pt', msoList: 'l3 level3 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>9.1.1.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Antes de começar uma partida um competidor que
                    esteja apresentando problemas de conexão pode solicitar um round de testes.
                    Esse round não conta para nada na definição da partida.<p /></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '73.7pt', msoAddSpace: 'auto', textIndent: '-34.0pt', msoList: 'l3 level3 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>9.1.2.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Problemas específicos que impedem a luta
                    acontecer de forma justa devem ser informados na sala #problemas do Discord
                    Oficial. A organização irá analisar a situação e decidir o que fazer. Caso seja
                    necessário realizar a luta novamente, os participantes serão informados, também
                    através do Discord.<p /></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '97.25pt', msoAddSpace: 'auto', textIndent: '-17.85pt', msoList: 'l3 level5 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>9.1.2.1.1.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}É importante não parar a luta para resolver
                    essas situações. Independente do problema, a luta deve seguir até o final.<p /></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '73.7pt', msoAddSpace: 'auto', textIndent: '-34.0pt', msoList: 'l3 level3 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>9.1.3.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Será tolerado um máximo de três desconexões por
                    competidor.<p /></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '73.7pt', msoAddSpace: 'auto', textIndent: '-34.0pt', msoList: 'l3 level3 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>9.1.4.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}O competidor tem 5 minutos para reconectar ao
                    jogo.<p /></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '73.7pt', msoAddSpace: 'auto', textIndent: '-34.0pt', msoList: 'l3 level3 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>9.1.5.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Qualquer competidor que estiver abusando de
                    desconexões para ganho próprio será julgado e punido de acordo com seu
                    comportamento.<p /></p>
                <p className="MsoListParagraphCxSpMiddle" style={{marginLeft: '73.7pt', msoAddSpace: 'auto', textIndent: '-34.0pt', msoList: 'l3 level3 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>9.1.6.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}Em caso de problemas técnicos com o jogo ou periféricos
                    do competidor, não será possível pausar a luta no meio de uma rodada.<p /></p>
                <p className="MsoListParagraphCxSpLast" style={{marginLeft: '97.25pt', msoAddSpace: 'auto', textIndent: '-17.85pt', msoList: 'l3 level5 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>9.1.6.1.1.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span></span>{/*[endif]*/}No início da rodada seguinte o competidor pode
                    solicitar uma pausa na luta para resolver o problema.<p /></p>
                <p className="MsoNormal"><p>&nbsp;</p></p>
                <p className="MsoListParagraphCxSpFirst" style={{marginLeft: '22.7pt', msoAddSpace: 'auto', textIndent: '-22.7pt', msoList: 'l3 level1 lfo5'}}>{/*[if !supportLists]*/}<b><span style={{fontSize: '16.0pt', lineHeight: '107%', msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>10.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp; </span></span></span></b>{/*[endif]*/}<b><span style={{fontSize: '16.0pt', lineHeight: '107%'}}>OBSERVAÇÕES<p /></span></b></p>
                <p className="MsoListParagraphCxSpLast" style={{marginLeft: '73.7pt', msoAddSpace: 'auto', textIndent: '-34.0pt', msoList: 'l3 level3 lfo5'}}>{/*[if !supportLists]*/}<span style={{msoBidiFontFamily: 'Calibri', msoBidiThemeFont: 'minor-latin'}}><span style={{msoList: 'Ignore'}}>10.1.1.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;
                        </span></span></span>{/*[endif]*/}As regras acima podem sofrer modificações em
                    caso de situações novas e não previstas.</p>
                </div>
                    </div>
                </>

            </DialogContentText>
            </DialogContent>
            <DialogActions>
                {/* <Button onClick={handleClose}>Cancel</Button> */}
                <Button onClick={handleCloseRule} variant="text">FECHAR</Button>
            </DialogActions>
        </Dialog>
    )
}