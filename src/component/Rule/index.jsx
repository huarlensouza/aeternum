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
            <DialogTitle>Regras e Conduta</DialogTitle>
            <DialogContent dividers={true}>
            <DialogContentText component="div">
                <>
                    <style
                        dangerouslySetInnerHTML={{
                        __html:
                            '\n<!--\n /* Font Definitions */\n @font-face\n\t{font-family:"Cambria Math";\n\tpanose-1:2 4 5 3 5 4 6 3 2 4;\n\tmso-font-charset:0;\n\tmso-generic-font-family:roman;\n\tmso-font-pitch:variable;\n\tmso-font-signature:3 0 0 0 1 0;}\n@font-face\n\t{font-family:Calibri;\n\tpanose-1:2 15 5 2 2 2 4 3 2 4;\n\tmso-font-charset:0;\n\tmso-generic-font-family:swiss;\n\tmso-font-pitch:variable;\n\tmso-font-signature:-469750017 -1073732485 9 0 511 0;}\n /* Style Definitions */\n p.MsoNormal, li.MsoNormal, div.MsoNormal\n\t{mso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmso-style-parent:"";\n\tmargin-top:0cm;\n\tmargin-right:0cm;\n\tmargin-bottom:8.0pt;\n\tmargin-left:0cm;\n\tline-height:106%;\n\tmso-pagination:widow-orphan;\n\tfont-size:11.0pt;\n\tfont-family:"Calibri",sans-serif;\n\tmso-ascii-font-family:Calibri;\n\tmso-ascii-theme-font:minor-latin;\n\tmso-fareast-font-family:Calibri;\n\tmso-fareast-theme-font:minor-latin;\n\tmso-hansi-font-family:Calibri;\n\tmso-hansi-theme-font:minor-latin;\n\tmso-bidi-font-family:"Times New Roman";\n\tmso-bidi-theme-font:minor-bidi;\n\tmso-fareast-language:EN-US;}\na:link, span.MsoHyperlink\n\t{mso-style-priority:99;\n\tcolor:#0563C1;\n\tmso-themecolor:hyperlink;\n\ttext-decoration:underline;\n\ttext-underline:single;}\na:visited, span.MsoHyperlinkFollowed\n\t{mso-style-noshow:yes;\n\tmso-style-priority:99;\n\tcolor:#954F72;\n\tmso-themecolor:followedhyperlink;\n\ttext-decoration:underline;\n\ttext-underline:single;}\np.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph\n\t{mso-style-priority:34;\n\tmso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmargin-top:0cm;\n\tmargin-right:0cm;\n\tmargin-bottom:8.0pt;\n\tmargin-left:36.0pt;\n\tmso-add-space:auto;\n\tline-height:106%;\n\tmso-pagination:widow-orphan;\n\tfont-size:11.0pt;\n\tfont-family:"Calibri",sans-serif;\n\tmso-ascii-font-family:Calibri;\n\tmso-ascii-theme-font:minor-latin;\n\tmso-fareast-font-family:Calibri;\n\tmso-fareast-theme-font:minor-latin;\n\tmso-hansi-font-family:Calibri;\n\tmso-hansi-theme-font:minor-latin;\n\tmso-bidi-font-family:"Times New Roman";\n\tmso-bidi-theme-font:minor-bidi;\n\tmso-fareast-language:EN-US;}\np.MsoListParagraphCxSpFirst, li.MsoListParagraphCxSpFirst, div.MsoListParagraphCxSpFirst\n\t{mso-style-priority:34;\n\tmso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmso-style-type:export-only;\n\tmargin-top:0cm;\n\tmargin-right:0cm;\n\tmargin-bottom:0cm;\n\tmargin-left:36.0pt;\n\tmso-add-space:auto;\n\tline-height:106%;\n\tmso-pagination:widow-orphan;\n\tfont-size:11.0pt;\n\tfont-family:"Calibri",sans-serif;\n\tmso-ascii-font-family:Calibri;\n\tmso-ascii-theme-font:minor-latin;\n\tmso-fareast-font-family:Calibri;\n\tmso-fareast-theme-font:minor-latin;\n\tmso-hansi-font-family:Calibri;\n\tmso-hansi-theme-font:minor-latin;\n\tmso-bidi-font-family:"Times New Roman";\n\tmso-bidi-theme-font:minor-bidi;\n\tmso-fareast-language:EN-US;}\np.MsoListParagraphCxSpMiddle, li.MsoListParagraphCxSpMiddle, div.MsoListParagraphCxSpMiddle\n\t{mso-style-priority:34;\n\tmso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmso-style-type:export-only;\n\tmargin-top:0cm;\n\tmargin-right:0cm;\n\tmargin-bottom:0cm;\n\tmargin-left:36.0pt;\n\tmso-add-space:auto;\n\tline-height:106%;\n\tmso-pagination:widow-orphan;\n\tfont-size:11.0pt;\n\tfont-family:"Calibri",sans-serif;\n\tmso-ascii-font-family:Calibri;\n\tmso-ascii-theme-font:minor-latin;\n\tmso-fareast-font-family:Calibri;\n\tmso-fareast-theme-font:minor-latin;\n\tmso-hansi-font-family:Calibri;\n\tmso-hansi-theme-font:minor-latin;\n\tmso-bidi-font-family:"Times New Roman";\n\tmso-bidi-theme-font:minor-bidi;\n\tmso-fareast-language:EN-US;}\np.MsoListParagraphCxSpLast, li.MsoListParagraphCxSpLast, div.MsoListParagraphCxSpLast\n\t{mso-style-priority:34;\n\tmso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmso-style-type:export-only;\n\tmargin-top:0cm;\n\tmargin-right:0cm;\n\tmargin-bottom:8.0pt;\n\tmargin-left:36.0pt;\n\tmso-add-space:auto;\n\tline-height:106%;\n\tmso-pagination:widow-orphan;\n\tfont-size:11.0pt;\n\tfont-family:"Calibri",sans-serif;\n\tmso-ascii-font-family:Calibri;\n\tmso-ascii-theme-font:minor-latin;\n\tmso-fareast-font-family:Calibri;\n\tmso-fareast-theme-font:minor-latin;\n\tmso-hansi-font-family:Calibri;\n\tmso-hansi-theme-font:minor-latin;\n\tmso-bidi-font-family:"Times New Roman";\n\tmso-bidi-theme-font:minor-bidi;\n\tmso-fareast-language:EN-US;}\np.msonormal0, li.msonormal0, div.msonormal0\n\t{mso-style-name:msonormal;\n\tmso-style-unhide:no;\n\tmso-margin-top-alt:auto;\n\tmargin-right:0cm;\n\tmso-margin-bottom-alt:auto;\n\tmargin-left:0cm;\n\tmso-pagination:widow-orphan;\n\tfont-size:12.0pt;\n\tfont-family:"Times New Roman",serif;\n\tmso-fareast-font-family:"Times New Roman";\n\tmso-fareast-theme-font:minor-fareast;}\n.MsoChpDefault\n\t{mso-style-type:export-only;\n\tmso-default-props:yes;\n\tfont-size:10.0pt;\n\tmso-ansi-font-size:10.0pt;\n\tmso-bidi-font-size:10.0pt;\n\tfont-family:"Calibri",sans-serif;\n\tmso-ascii-font-family:Calibri;\n\tmso-ascii-theme-font:minor-latin;\n\tmso-fareast-font-family:Calibri;\n\tmso-fareast-theme-font:minor-latin;\n\tmso-hansi-font-family:Calibri;\n\tmso-hansi-theme-font:minor-latin;\n\tmso-bidi-font-family:"Times New Roman";\n\tmso-bidi-theme-font:minor-bidi;\n\tmso-fareast-language:EN-US;}\n@page WordSection1\n\t{size:595.3pt 841.9pt;\n\tmargin:36.0pt 36.0pt 36.0pt 36.0pt;\n\tmso-header-margin:35.4pt;\n\tmso-footer-margin:35.4pt;\n\tmso-paper-source:0;}\ndiv.WordSection1\n\t{page:WordSection1;}\n /* List Definitions */\n @list l0\n\t{mso-list-id:1061296608;\n\tmso-list-template-ids:50890798;}\n@list l0:level1\n\t{mso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:22.7pt;\n\ttext-indent:-22.7pt;\n\tmso-ansi-font-size:16.0pt;}\n@list l0:level2\n\t{mso-level-text:"%1\\.%2\\.";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:45.35pt;\n\ttext-indent:-25.5pt;}\n@list l0:level3\n\t{mso-level-text:"%1\\.%2\\.%3\\.";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:73.7pt;\n\ttext-indent:-34.0pt;}\n@list l0:level4\n\t{mso-level-text:"%1\\.%2\\.%3\\.%4\\.";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:77.4pt;\n\ttext-indent:-17.85pt;}\n@list l0:level5\n\t{mso-level-text:"%1\\.%2\\.%3\\.%4\\.%5\\.";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:97.25pt;\n\ttext-indent:-17.85pt;}\n@list l0:level6\n\t{mso-level-text:"%1\\.%2\\.%3\\.%4\\.%5\\.%6\\.";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:117.1pt;\n\ttext-indent:-17.85pt;}\n@list l0:level7\n\t{mso-level-text:"%1\\.%2\\.%3\\.%4\\.%5\\.%6\\.%7\\.";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:136.95pt;\n\ttext-indent:-17.85pt;}\n@list l0:level8\n\t{mso-level-text:"%1\\.%2\\.%3\\.%4\\.%5\\.%6\\.%7\\.%8\\.";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:156.8pt;\n\ttext-indent:-17.85pt;}\n@list l0:level9\n\t{mso-level-text:"%1\\.%2\\.%3\\.%4\\.%5\\.%6\\.%7\\.%8\\.%9\\.";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:176.65pt;\n\ttext-indent:-17.85pt;}\n@list l1\n\t{mso-list-id:1180923176;\n\tmso-list-template-ids:68550685;\n\tmso-list-style-priority:99;\n\tmso-list-style-name:Estilo1;}\n@list l1:level1\n\t{mso-level-text:%1;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:18.0pt;\n\ttext-indent:-18.0pt;\n\tfont-family:"Times New Roman",serif;\n\tcolor:windowtext;}\n@list l1:level2\n\t{mso-level-text:%2;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:36.0pt;\n\ttext-indent:-18.0pt;\n\tfont-family:"Times New Roman",serif;\n\tcolor:windowtext;}\n@list l1:level3\n\t{mso-level-number-format:roman-lower;\n\tmso-level-text:"%3\\)";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:54.0pt;\n\ttext-indent:-18.0pt;}\n@list l1:level4\n\t{mso-level-text:"\\(%4\\)";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:72.0pt;\n\ttext-indent:-18.0pt;}\n@list l1:level5\n\t{mso-level-number-format:alpha-lower;\n\tmso-level-text:"\\(%5\\)";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:90.0pt;\n\ttext-indent:-18.0pt;}\n@list l1:level6\n\t{mso-level-number-format:roman-lower;\n\tmso-level-text:"\\(%6\\)";\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:108.0pt;\n\ttext-indent:-18.0pt;}\n@list l1:level7\n\t{mso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:126.0pt;\n\ttext-indent:-18.0pt;}\n@list l1:level8\n\t{mso-level-number-format:alpha-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:144.0pt;\n\ttext-indent:-18.0pt;}\n@list l1:level9\n\t{mso-level-number-format:roman-lower;\n\tmso-level-tab-stop:none;\n\tmso-level-number-position:left;\n\tmargin-left:162.0pt;\n\ttext-indent:-18.0pt;}\nol\n\t{margin-bottom:0cm;}\nul\n\t{margin-bottom:0cm;}\n-->\n'
                        }}
                    />
                    <div className="WordSection1">
                        {/* Uso de Imagem */}
                        <p
                            className="MsoListParagraphCxSpFirst"
                            style={{
                                marginLeft: "22.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-22.7pt",
                                msoList: "l0 level1 lfo2"
                            }}
                        >
                            <b>
                                <span
                                    style={{
                                        fontSize: "16.0pt",
                                        lineHeight: "106%",
                                        msoBidiFontFamily: "Calibri",
                                        msoBidiThemeFont: "minor-latin"
                                    }}
                                >
                                    <span style={{ msoList: "Ignore" }}>
                                        1.
                                        <span style={{ font: '7.0pt "Times New Roman"' }}>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                        </span>
                                    </span>
                                </span>
                            </b>
                            <b>
                                <span style={{ fontSize: "16.0pt", lineHeight: "106%" }}>USO DE IMAGEM</span>
                            </b>
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginTop: "0cm",
                                marginRight: "0cm",
                                marginBottom: "0cm",
                                marginLeft: "45.35pt",
                                msoAddSpace: "auto",
                                textIndent: "-25.5pt",
                                msoList: "l0 level2 lfo2"
                            }}
                        >
                            <b>
                                <span
                                    style={{
                                        msoBidiFontFamily: "Calibri",
                                        msoBidiThemeFont: "minor-latin"
                                    }}
                                >
                                    <span style={{ msoList: "Ignore" }}>
                                        1.1.
                                        <span style={{ font: '7.0pt "Times New Roman"' }}>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                        </span>
                                    </span>
                                </span>
                            </b>
                            Todos os participantes concordam que as imagens de suas lutas
                            podem ser usadas livremente pela organizadora, sem nenhuma restri????o.
                        </p>

                        <br/>

                        {/* Discord */}
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "22.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-22.7pt",
                                msoList: "l0 level1 lfo2"
                            }}
                        >
                            <b>
                                <span
                                    style={{
                                        fontSize: "16.0pt",
                                        lineHeight: "106%",
                                        msoBidiFontFamily: "Calibri",
                                        msoBidiThemeFont: "minor-latin"
                                    }}
                                >
                                    <span style={{ msoList: "Ignore" }}>
                                        2.
                                        <span style={{ font: '7.0pt "Times New Roman"' }}>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                        </span>
                                    </span>
                                </span>
                            </b>
                            <b>
                                <span style={{ fontSize: "16.0pt", lineHeight: "106%" }}> DISCORD </span>
                            </b>
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "45.35pt",
                                msoAddSpace: "auto",
                                textIndent: "-25.5pt",
                                msoList: "l0 level2 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    2.1.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            Todos os competidores devem OBRIGATORIAMENTE fazer parte do
                            Discord Oficial do Evento
                        </p>

                        <br/>

                        {/* Armas e Restri????es */}
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "22.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-22.7pt",
                                msoList: "l0 level1 lfo2"
                            }}
                        >
                            <b>
                                <span
                                    style={{
                                        fontSize: "16.0pt",
                                        lineHeight: "106%",
                                        msoBidiFontFamily: "Calibri",
                                        msoBidiThemeFont: "minor-latin"
                                    }}
                                >
                                    <span style={{ msoList: "Ignore" }}>
                                        3.
                                        <span style={{ font: '7.0pt "Times New Roman"' }}>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                        </span>
                                    </span>
                                </span>
                            </b>
                            
                            <b>
                                <span style={{ fontSize: "16.0pt", lineHeight: "106%" }}>ARMAS E RESTRI????ES</span>
                            </b>
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "45.35pt",
                                msoAddSpace: "auto",
                                textIndent: "-25.5pt",
                                msoList: "l0 level2 lfo2"
                            }}
                        >
                        
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    3.1.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            No momento o Bast??o Vital e Escudo Torre est??o desabilitados para Evento
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "45.35pt",
                                msoAddSpace: "auto",
                                textIndent: "-25.5pt",
                                msoList: "l0 level2 lfo2"
                            }}
                        >
                            
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    3.2.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            Nos campeonatos podem trocar as armas registradas antes do
                            Sorteio.
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "45.35pt",
                                msoAddSpace: "auto",
                                textIndent: "-25.5pt",
                                msoList: "l0 level2 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    3.3.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            Isso ser?? feito antes do processo da forma????o das chaves,
                            assim o competidor n??o tem como saber quem ser?? seu oponente antes do
                            sorteio.
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "73.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-34.0pt",
                                msoList: "l0 level3 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    3.3.1.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            Depois do sorteio, o competidor n??o poder?? alterar mais as
                            armas selecionadas.
                        </p>
                        
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "73.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-34.0pt",
                                msoList: "l0 level3 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    3.3.2.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            Durante o evento, o competidor poder?? alternar os
                            equipamentos da mesma arma registrada.
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "45.35pt",
                                msoAddSpace: "auto",
                                textIndent: "-25.5pt",
                                msoList: "l0 level2 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    3.4.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            Somente competidores do n??vel 60 poder??o participar, caso
                            esteja n??vel inferior, ser?? desclassificado.
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "45.35pt",
                                msoAddSpace: "auto",
                                textIndent: "-25.5pt",
                                msoList: "l0 level2 lfo2"
                            }}
                        >
                            <span
                                style={{
                                msoBidiFontFamily: "Calibri",
                                msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    3.5.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            N??o existe restri????o dos pontos de equipamentos dos
                            participantes e nenhum balanceamento com esse crit??rio.
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "45.35pt",
                                msoAddSpace: "auto",
                                textIndent: "-25.5pt",
                                msoList: "l0 level2 lfo2"
                            }}
                        >
                        
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    3.6.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            N??o ultrapassar o limite da ??rea estabelecida pela
                            organiza????o.
                        </p>
                        <p
                            className="MsoListParagraphCxSpLast"
                            style={{
                                marginLeft: "45.35pt",
                                msoAddSpace: "auto",
                                textIndent: "-25.5pt",
                                msoList: "l0 level2 lfo2"
                            }}
                        >
                            <span
                                style={{
                                msoBidiFontFamily: "Calibri",
                                msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    3.7.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            N??o estar em grupo durante o duelo.
                        </p>

                        <br/>

                        {/* VAGAS E INSCRI????ES */}
                        <p
                            className="MsoListParagraphCxSpFirst"
                            style={{
                                marginLeft: "22.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-22.7pt",
                                msoList: "l0 level1 lfo2"
                            }}
                        >
                            <b>
                                <span
                                    style={{
                                        fontSize: "16.0pt",
                                        lineHeight: "106%",
                                        msoBidiFontFamily: "Calibri",
                                        msoBidiThemeFont: "minor-latin"
                                    }}
                                >
                                <span style={{ msoList: "Ignore" }}>
                                    4.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                        </span>
                                    </span>
                                </span>
                            </b>
                            
                            <b>
                                <span style={{ fontSize: "16.0pt", lineHeight: "106%" }}> VAGAS E INSCRI????ES</span>
                            </b>
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "45.35pt",
                                msoAddSpace: "auto",
                                textIndent: "-25.5pt",
                                msoList: "l0 level2 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    4.1.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            O limite de vagas para cada campeonato ser?? determinado
                            individualmente em cada competi????o, isso ser?? exibido no pr??prio site a
                            forma????o do torneio.
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "45.35pt",
                                msoAddSpace: "auto",
                                textIndent: "-25.5pt",
                                msoList: "l0 level2 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    4.2.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            Todas as inscri????es s??o feitas atrav??s do site.
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "45.35pt",
                                msoAddSpace: "auto",
                                textIndent: "-25.5pt",
                                msoList: "l0 level2 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    4.3.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            Todos os jogadores devem estar presente no Discord com
                            anteced??ncia de 10 minutos antes da sua rodada para realizar check-in.
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "73.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-34.0pt",
                                msoList: "l0 level3 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    4.3.1.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            N??o h?? puni????o para cancelamento do Check-in antes dos 10
                            minutos.
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "73.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-34.0pt",
                                msoList: "l0 level3 lfo2"
                            }}
                        >
                        
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    4.3.2.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            O check-in poder?? ser refeito mesmo ap??s o cancelamento,
                            desde que ainda esteja dentro do prazo estipulado para rodada.
                        </p>
                        <p
                            className="MsoListParagraphCxSpLast"
                            style={{
                                marginLeft: "73.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-34.0pt",
                                msoList: "l0 level3 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    4.3.3.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            Faltar a luta que j?? foi marcada ir?? resultar em W.O.
                        </p>

                        <br/>

                        {/* PARTIDAS */}
                        <p
                            className="MsoListParagraphCxSpFirst"
                            style={{
                                marginLeft: "22.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-22.7pt",
                                msoList: "l0 level1 lfo2"
                            }}
                        >
                            <b>
                                <span
                                    style={{
                                        fontSize: "16.0pt",
                                        lineHeight: "106%",
                                        msoBidiFontFamily: "Calibri",
                                        msoBidiThemeFont: "minor-latin"
                                    }}
                                >
                                    <span style={{ msoList: "Ignore" }}>
                                        5.
                                        <span style={{ font: '7.0pt "Times New Roman"' }}>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                        </span>
                                    </span>
                                </span>
                            </b>
                            
                            <b>
                                <span style={{ fontSize: "16.0pt", lineHeight: "106%" }}>PARTIDAS</span>
                            </b>
                        </p>
                        <p
                            className="MsoListParagraphCxSpLast"
                            style={{
                                marginLeft: "45.35pt",
                                msoAddSpace: "auto",
                                textIndent: "-25.5pt",
                                msoList: "l0 level2 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    5.1.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            Em torneios que ter??o 32 competidores, ser??o confrontos
                            diretos em uma melhor de 3 at?? a final, e na final ser?? um confronto
                            definindo o campe??o em uma melhor de 5.
                        </p>
                        
                        <br/>

                        {/* COMPORTAMENTO DENTRO DA ARENA */}
                        <p
                            className="MsoListParagraphCxSpFirst"
                            style={{
                                marginLeft: "22.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-22.7pt",
                                msoList: "l0 level1 lfo2"
                            }}
                        >
                            <b>
                                <span
                                    style={{
                                        fontSize: "16.0pt",
                                        lineHeight: "106%",
                                        msoBidiFontFamily: "Calibri",
                                        msoBidiThemeFont: "minor-latin"
                                    }}
                                >
                                    <span style={{ msoList: "Ignore" }}>
                                        6.
                                        <span style={{ font: '7.0pt "Times New Roman"' }}>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                        </span>
                                    </span>
                                </span>
                            </b>
                            <b>
                                <span style={{ fontSize: "16.0pt", lineHeight: "106%" }}>COMPORTAMENTO DENTRO DA ARENA</span>
                            </b>
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "73.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-34.0pt",
                                msoList: "l0 level3 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    6.1.1.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            ?? proibido qualquer comportamento ofensivo entre os
                            competidores dentro da Arena Aeternum como mensagens ofensivas e conduta
                            de ??dio.
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "73.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-34.0pt",
                                msoList: "l0 level3 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    6.1.2.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            N??o ser?? permitido comportamento antijogo, do tipo evitar
                            combate de forma que seja IMPOSS??VEL para oponente revidar etc.
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "77.4pt",
                                msoAddSpace: "auto",
                                textIndent: "-17.85pt",
                                msoList: "l0 level4 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    6.1.2.1.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            Na primeira ocorr??ncia o competidor receber?? uma advert??ncia
                        </p>
                        <p
                            className="MsoListParagraphCxSpLast"
                            style={{
                                marginLeft: "77.4pt",
                                msoAddSpace: "auto",
                                textIndent: "-17.85pt",
                                msoList: "l0 level4 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    6.1.2.2.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            Na segunda ocorr??ncia de comportamento ofensivo,
                            preconceituoso, racista etc. O competidor perde a partida. Essa contagem
                            pode se acumular se o competidor repetir esse comportamento em mais de uma
                            partida, nesse caso o competidor pode ser banido da competi????o ativa e
                            futuras.
                        </p>

                        <br/>

                        {/* ATRASOS, FALTAS E WOS */}
                        <p
                            className="MsoListParagraphCxSpFirst"
                            style={{
                                marginLeft: "22.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-22.7pt",
                                msoList: "l0 level1 lfo2"
                            }}
                        >
                        
                            <b>
                                <span
                                    style={{
                                        fontSize: "16.0pt",
                                        lineHeight: "106%",
                                        msoBidiFontFamily: "Calibri",
                                        msoBidiThemeFont: "minor-latin"
                                    }}
                                >
                                    <span style={{ msoList: "Ignore" }}>
                                        7.
                                        <span style={{ font: '7.0pt "Times New Roman"' }}>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                        </span>
                                    </span>
                                </span>
                            </b>
                            
                            <b>
                                <span style={{ fontSize: "16.0pt", lineHeight: "106%" }}>ATRASOS, FALTAS E WOS</span>
                            </b>
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "73.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-34.0pt",
                                msoList: "l0 level3 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    7.1.1.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            Todos os competidores devem estar online 10 minutos antes das
                            suas lutas.
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "73.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-34.0pt",
                                msoList: "l0 level3 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    7.1.2.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            Atrasos devem ser avisados com pelo menos 60 minutos de
                            anteced??ncia, o aviso deve ser feito atrav??s do Discord Oficial no Canal
                            #aviso-de-falta
                        </p>
                        <p
                            className="MsoListParagraphCxSpLast"
                            style={{
                                marginLeft: "73.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-34.0pt",
                                msoList: "l0 level3 lfo2"
                            }}
                        >
                            <span
                                style={{
                                msoBidiFontFamily: "Calibri",
                                msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    7.1.3.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            Caso o lutador n??o esteja presente no hor??rio do seu duelo,
                            ela ser?? considerada uma derrota W.O
                        </p>

                        <br/>

                        {/* PROBLEMAS FORA DE PARTIDAS */}
                        <p
                            className="MsoListParagraphCxSpFirst"
                            style={{
                                marginLeft: "22.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-22.7pt",
                                msoList: "l0 level1 lfo2"
                            }}
                        >
                            <b>
                                <span
                                    style={{
                                        fontSize: "16.0pt",
                                        lineHeight: "106%",
                                        msoBidiFontFamily: "Calibri",
                                        msoBidiThemeFont: "minor-latin"
                                    }}
                                >
                                    <span style={{ msoList: "Ignore" }}>
                                        8.
                                        <span style={{ font: '7.0pt "Times New Roman"' }}>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                        </span>
                                    </span>
                                </span>
                            </b>
                            
                            <b>
                                <span style={{ fontSize: "16.0pt", lineHeight: "106%" }}> PROBLEMAS FORA DE PARTIDAS</span>
                            </b>
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "73.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-34.0pt",
                                msoList: "l0 level3 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    8.1.1.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            Qualquer problema relacionado ao evento ou duelos deve ser
                            comunicado atrav??s do Discord Oficial na sala #problemas
                        </p>
                        <p
                            className="MsoListParagraphCxSpLast"
                            style={{
                                marginLeft: "73.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-34.0pt",
                                msoList: "l0 level3 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    8.1.2.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            Problemas confidenciais devem ser enviados atrav??s do DM de
                            algum respons??vel pelo evento.
                        </p>

                        <br/>

                        {/*  CRASHS E PROBLEMAS DE CONEX??O DURANTE UMA PARTIDA */}
                        <p
                            className="MsoListParagraphCxSpFirst"
                            style={{
                                marginLeft: "22.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-22.7pt",
                                msoList: "l0 level1 lfo2"
                            }}
                        >
                            <b>
                                <span
                                    style={{
                                        fontSize: "16.0pt",
                                        lineHeight: "106%",
                                        msoBidiFontFamily: "Calibri",
                                        msoBidiThemeFont: "minor-latin"
                                    }}
                                >
                                    <span style={{ msoList: "Ignore" }}>
                                        9.
                                        <span style={{ font: '7.0pt "Times New Roman"' }}>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                        </span>
                                    </span>
                                </span>
                            </b>
                            <b>
                                <span style={{ fontSize: "16.0pt", lineHeight: "106%" }}>CRASHS E PROBLEMAS DE CONEX??O DURANTE UMA PARTIDA</span>
                            </b>
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "73.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-34.0pt",
                                msoList: "l0 level3 lfo2"
                            }}
                        >
                            <span
                                style={{
                                msoBidiFontFamily: "Calibri",
                                msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    9.1.1.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            Antes de come??ar uma partida um competidor que esteja
                            apresentando problemas de conex??o pode solicitar uma rodada de testes.
                            Essa rodada n??o conta para nada na defini????o da partida.
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "73.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-34.0pt",
                                msoList: "l0 level3 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    9.1.2.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            Problemas espec??ficos que impedem a luta acontecer de forma
                            justa devem ser informados na sala #problemas do Discord Oficial. A
                            organiza????o ir?? analisar a situa????o e decidir o que fazer. Caso seja
                            necess??rio realizar a luta novamente, os participantes ser??o informados,
                            tamb??m atrav??s do Discord.
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "77.4pt",
                                msoAddSpace: "auto",
                                textIndent: "-17.85pt",
                                msoList: "l0 level4 lfo2"
                            }}
                        >
                            <span
                                style={{
                                msoBidiFontFamily: "Calibri",
                                msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    9.1.2.1.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            ?? importante n??o parar a luta para resolver essas situa????es.
                            Independente do problema, a luta deve seguir at?? o final.
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "73.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-34.0pt",
                                msoList: "l0 level3 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    9.1.3.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            Ser?? tolerado um m??ximo de tr??s desconex??es por competidor.
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "73.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-34.0pt",
                                msoList: "l0 level3 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    9.1.4.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            O competidor tem 5 minutos para reconectar ao jogo.
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "73.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-34.0pt",
                                msoList: "l0 level3 lfo2"
                            }}
                        >
                            <span
                                style={{
                                msoBidiFontFamily: "Calibri",
                                msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                9.1.5.
                                <span style={{ font: '7.0pt "Times New Roman"' }}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                </span>
                            </span>
                            Qualquer competidor que estiver abusando de desconex??es para
                            ganho pr??prio ser?? julgado e punido de acordo com seu comportamento.
                        </p>
                        <p
                            className="MsoListParagraphCxSpMiddle"
                            style={{
                                marginLeft: "73.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-34.0pt",
                                msoList: "l0 level3 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    9.1.6.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            Em caso de problemas t??cnicos com o jogo ou perif??ricos do
                            competidor, n??o ser?? poss??vel pausar a luta no meio de uma rodada.
                        </p>
                        <p
                            className="MsoListParagraphCxSpLast"
                            style={{
                                marginLeft: "77.4pt",
                                msoAddSpace: "auto",
                                textIndent: "-17.85pt",
                                msoList: "l0 level4 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    9.1.6.1.
                                    <span style={{ font: '7.0pt "Times New Roman"' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </span>
                            </span>
                            No in??cio da rodada seguinte o competidor pode solicitar uma
                            pausa na luta para resolver o problema.
                        </p>

                        <br/>

                        {/*  OBSERVA????ES */}
                        <p
                            className="MsoListParagraphCxSpFirst"
                            style={{
                                marginLeft: "22.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-22.7pt",
                                msoList: "l0 level1 lfo2"
                            }}
                        >
                            <b>
                                <span
                                    style={{
                                        fontSize: "16.0pt",
                                        lineHeight: "106%",
                                        msoBidiFontFamily: "Calibri",
                                        msoBidiThemeFont: "minor-latin"
                                    }}
                                >
                                    <span style={{ msoList: "Ignore" }}>
                                        10.<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp; </span>
                                    </span>
                                </span>
                            </b>
                            <b>
                                <span style={{ fontSize: "16.0pt", lineHeight: "106%" }}>OBSERVA????ES</span>
                            </b>
                        </p>
                        <p
                            className="MsoListParagraphCxSpLast"
                            style={{
                                marginLeft: "73.7pt",
                                msoAddSpace: "auto",
                                textIndent: "-34.0pt",
                                msoList: "l0 level3 lfo2"
                            }}
                        >
                            <span
                                style={{
                                    msoBidiFontFamily: "Calibri",
                                    msoBidiThemeFont: "minor-latin"
                                }}
                            >
                                <span style={{ msoList: "Ignore" }}>
                                    10.1.1.<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
                                </span>
                            </span>
                            O regulamento pode ser alterado a qualquer momento.
                        </p>
                    </div>
                </>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseRule} variant="text">FECHAR</Button>
            </DialogActions>
        </Dialog>
    );
};