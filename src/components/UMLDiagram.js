import React, { useEffect } from 'react';


const UMLDiagram = ({ section }) => {

    return (
        <div
            className="mxgraph bg-white mb-20 max-w-screen-lg"
            style={{
                border: "1px solid transparent",
                position: "relative",
                touchAction: "none",
                overflow: "auto",
                marginTop: 26,
                width: "90%",
                marginLeft: "auto",
                marginRight:"auto",
                height: "524.43px"
            }}
            data-mxgraph='{"highlight":"#0000ff","nav":true,"resize":true,"xml":"<mxfile host=\"app.diagrams.net\" modified=\"2024-01-17T18:40:30.415Z\" agent=\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36\" etag=\"66TBiUDhvjC6QIE4YdrZ\" version=\"22.1.21\" type=\"device\"><diagram id=\"C5RBs43oDa-KdzZeNtuy\" name=\"Page-1\"><mxGraphModel dx=\"4217\" dy=\"1845\" grid=\"1\" gridSize=\"10\" guides=\"1\" tooltips=\"1\" connect=\"1\" arrows=\"1\" fold=\"1\" page=\"1\" pageScale=\"1\" pageWidth=\"827\" pageHeight=\"1169\" math=\"0\" shadow=\"0\"><root><mxCell id=\"WIyWlLk6GJQsqaUBKTNV-0\"/><mxCell id=\"WIyWlLk6GJQsqaUBKTNV-1\" parent=\"WIyWlLk6GJQsqaUBKTNV-0\"/><mxCell id=\"zkfFHV4jXpPFQw0GAbJ--0\" value=\"FactoryController\" style=\"swimlane;fontStyle=2;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" vertex=\"1\"><mxGeometry x=\"260\" y=\"10\" width=\"170\" height=\"170\" as=\"geometry\"><mxRectangle x=\"230\" y=\"140\" width=\"160\" height=\"26\" as=\"alternateBounds\"/></mxGeometry></mxCell><mxCell id=\"zkfFHV4jXpPFQw0GAbJ--1\" value=\"- FactoryStrategyContext\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" parent=\"zkfFHV4jXpPFQw0GAbJ--0\" vertex=\"1\"><mxGeometry y=\"26\" width=\"170\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-0\" value=\"- FactoryRegistry\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" parent=\"zkfFHV4jXpPFQw0GAbJ--0\" vertex=\"1\"><mxGeometry y=\"52\" width=\"170\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-1\" value=\"- StrategyRegistry\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" parent=\"zkfFHV4jXpPFQw0GAbJ--0\" vertex=\"1\"><mxGeometry y=\"78\" width=\"170\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"zkfFHV4jXpPFQw0GAbJ--4\" value=\"\" style=\"line;html=1;strokeWidth=1;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;\" parent=\"zkfFHV4jXpPFQw0GAbJ--0\" vertex=\"1\"><mxGeometry y=\"104\" width=\"170\" height=\"8\" as=\"geometry\"/></mxCell><mxCell id=\"zkfFHV4jXpPFQw0GAbJ--5\" value=\"buildComputer(FactoryDTO) &#10;: List&lt;ComputerDTO&gt;\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=11;\" parent=\"zkfFHV4jXpPFQw0GAbJ--0\" vertex=\"1\"><mxGeometry y=\"112\" width=\"170\" height=\"38\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-3\" value=\"FactoryRegistry\" style=\"swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" vertex=\"1\"><mxGeometry x=\"170\" y=\"230\" width=\"140\" height=\"50\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-12\" value=\"+ factoryMao : HashMap\" style=\"html=1;whiteSpace=wrap;fontSize=11;\" parent=\"QAjpO0AhZiQws79laQFl-3\" vertex=\"1\"><mxGeometry y=\"26\" width=\"140\" height=\"24\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-8\" value=\"StrategyRegistry\" style=\"swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" vertex=\"1\"><mxGeometry x=\"380\" y=\"230\" width=\"140\" height=\"52\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-11\" value=\"+ strategyMap : HashMap\" style=\"html=1;whiteSpace=wrap;fontSize=11;\" parent=\"QAjpO0AhZiQws79laQFl-8\" vertex=\"1\"><mxGeometry y=\"26\" width=\"140\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-14\" value=\"FactoryStrategyContext\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" vertex=\"1\"><mxGeometry x=\"235\" y=\"308\" width=\"210\" height=\"50\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-15\" value=\"+ executeStrategy(Factory, Strategy) : List&amp;lt;Computer&amp;gt;\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=8;\" parent=\"QAjpO0AhZiQws79laQFl-14\" vertex=\"1\"><mxGeometry y=\"26\" width=\"210\" height=\"24\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-19\" value=\"&amp;lt;&amp;lt;Abstract&amp;gt;&amp;gt;&lt;br&gt;AbstractComputerFactory\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=40;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" vertex=\"1\"><mxGeometry x=\"260\" y=\"561\" width=\"160\" height=\"204\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-26\" value=\"- selector : ComponentSelector\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=10;\" parent=\"QAjpO0AhZiQws79laQFl-19\" vertex=\"1\"><mxGeometry y=\"40\" width=\"160\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-21\" value=\"\" style=\"line;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;strokeColor=inherit;\" parent=\"QAjpO0AhZiQws79laQFl-19\" vertex=\"1\"><mxGeometry y=\"66\" width=\"160\" height=\"8\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-22\" value=\"+ buildeBudgetComputer : Computer\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=9;\" parent=\"QAjpO0AhZiQws79laQFl-19\" vertex=\"1\"><mxGeometry y=\"74\" width=\"160\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-24\" value=\"+ buildMidTierComputer : Computer\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=9;\" parent=\"QAjpO0AhZiQws79laQFl-19\" vertex=\"1\"><mxGeometry y=\"100\" width=\"160\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-23\" value=\"+ buildHighEndComputer : Computer\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=9;\" parent=\"QAjpO0AhZiQws79laQFl-19\" vertex=\"1\"><mxGeometry y=\"126\" width=\"160\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-25\" value=\"+ buildEnthusiastComputer : Computer\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=8;\" parent=\"QAjpO0AhZiQws79laQFl-19\" vertex=\"1\"><mxGeometry y=\"152\" width=\"160\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-27\" value=\"# buildComputer(budget,info) : Computer\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=8;\" parent=\"QAjpO0AhZiQws79laQFl-19\" vertex=\"1\"><mxGeometry y=\"178\" width=\"160\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-28\" value=\"&amp;lt;&amp;lt;Interface&amp;gt;&amp;gt;&lt;br&gt;Shuffler\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=40;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" vertex=\"1\"><mxGeometry x=\"-50\" y=\"772.5\" width=\"160\" height=\"92\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-58\" value=\"+ shuffleValues(ComputerInfo)&amp;nbsp;\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=10;\" parent=\"QAjpO0AhZiQws79laQFl-28\" vertex=\"1\"><mxGeometry y=\"40\" width=\"160\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-29\" value=\"- random() : float&amp;nbsp;\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=10;\" parent=\"QAjpO0AhZiQws79laQFl-28\" vertex=\"1\"><mxGeometry y=\"66\" width=\"160\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-32\" value=\"CompupterInfo\" style=\"swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" vertex=\"1\"><mxGeometry x=\"40\" y=\"429.5\" width=\"140\" height=\"234\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-33\" value=\"+ x_motherboard\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" parent=\"QAjpO0AhZiQws79laQFl-32\" vertex=\"1\"><mxGeometry y=\"26\" width=\"140\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-34\" value=\"+ x_case\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" parent=\"QAjpO0AhZiQws79laQFl-32\" vertex=\"1\"><mxGeometry y=\"52\" width=\"140\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-42\" value=\"+ x_cpu\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" parent=\"QAjpO0AhZiQws79laQFl-32\" vertex=\"1\"><mxGeometry y=\"78\" width=\"140\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-43\" value=\"+x_cpuCooler\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" parent=\"QAjpO0AhZiQws79laQFl-32\" vertex=\"1\"><mxGeometry y=\"104\" width=\"140\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-35\" value=\"+ x_gpu\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" parent=\"QAjpO0AhZiQws79laQFl-32\" vertex=\"1\"><mxGeometry y=\"130\" width=\"140\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-46\" value=\"+ x_ram\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" parent=\"QAjpO0AhZiQws79laQFl-32\" vertex=\"1\"><mxGeometry y=\"156\" width=\"140\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-45\" value=\"+ x_powerUnit\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" parent=\"QAjpO0AhZiQws79laQFl-32\" vertex=\"1\"><mxGeometry y=\"182\" width=\"140\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-44\" value=\"+ x_storage&amp;nbsp;\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" parent=\"QAjpO0AhZiQws79laQFl-32\" vertex=\"1\"><mxGeometry y=\"208\" width=\"140\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-48\" value=\"AudioProductionCFactory\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" vertex=\"1\"><mxGeometry x=\"-400\" y=\"611.5\" width=\"160\" height=\"52\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-59\" value=\"&amp;lt;&amp;lt;Interface&amp;gt;&amp;gt;&lt;br&gt;ComponentSelector\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=40;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" vertex=\"1\"><mxGeometry x=\"487\" y=\"659.5\" width=\"200\" height=\"85\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-60\" value=\"+ selectComponents(ComputerInfo) : SelectedComponents&amp;nbsp;\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=11;\" parent=\"QAjpO0AhZiQws79laQFl-59\" vertex=\"1\"><mxGeometry y=\"40\" width=\"200\" height=\"45\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-63\" value=\"&amp;lt;&amp;lt;Abstract&amp;gt;&amp;gt;&lt;br&gt;ComponentEntity\" style=\"swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=40;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" vertex=\"1\"><mxGeometry x=\"485\" y=\"1090\" width=\"140\" height=\"118\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-64\" value=\"+ price : BigDecimal\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" parent=\"QAjpO0AhZiQws79laQFl-63\" vertex=\"1\"><mxGeometry y=\"40\" width=\"140\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-65\" value=\"+ name : String\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" parent=\"QAjpO0AhZiQws79laQFl-63\" vertex=\"1\"><mxGeometry y=\"66\" width=\"140\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-66\" value=\"+ url : String\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" parent=\"QAjpO0AhZiQws79laQFl-63\" vertex=\"1\"><mxGeometry y=\"92\" width=\"140\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-67\" value=\"&amp;lt;&amp;lt;interface&amp;gt;&amp;gt;&lt;br&gt;CompositeComponent\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=40;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" vertex=\"1\"><mxGeometry x=\"240\" y=\"1110\" width=\"160\" height=\"66\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-68\" value=\"+ getCombinedPrice : BigDecimal\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=10;\" parent=\"QAjpO0AhZiQws79laQFl-67\" vertex=\"1\"><mxGeometry y=\"40\" width=\"160\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-77\" value=\"&amp;lt;&amp;lt;interface&amp;gt;&amp;gt;&lt;br&gt;CompatibilityComponent\" style=\"swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=40;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" vertex=\"1\"><mxGeometry x=\"-65\" y=\"1152\" width=\"200\" height=\"66\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-78\" value=\"+ checkCompatibility(Class&amp;lt;T&amp;gt;,id) : boolean&amp;nbsp;\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=9;\" parent=\"QAjpO0AhZiQws79laQFl-77\" vertex=\"1\"><mxGeometry y=\"40\" width=\"200\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-81\" value=\"SelectedComponents\" style=\"swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" vertex=\"1\"><mxGeometry x=\"600\" y=\"387\" width=\"140\" height=\"234\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-82\" value=\"+ motherboard\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" parent=\"QAjpO0AhZiQws79laQFl-81\" vertex=\"1\"><mxGeometry y=\"26\" width=\"140\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-83\" value=\"+ case\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" parent=\"QAjpO0AhZiQws79laQFl-81\" vertex=\"1\"><mxGeometry y=\"52\" width=\"140\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-84\" value=\"+ cpu\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" parent=\"QAjpO0AhZiQws79laQFl-81\" vertex=\"1\"><mxGeometry y=\"78\" width=\"140\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-85\" value=\"+ cpuCooler\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" parent=\"QAjpO0AhZiQws79laQFl-81\" vertex=\"1\"><mxGeometry y=\"104\" width=\"140\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-86\" value=\"+ gpu\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" parent=\"QAjpO0AhZiQws79laQFl-81\" vertex=\"1\"><mxGeometry y=\"130\" width=\"140\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-87\" value=\"+ ram\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" parent=\"QAjpO0AhZiQws79laQFl-81\" vertex=\"1\"><mxGeometry y=\"156\" width=\"140\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-88\" value=\"+ powerUnit\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" parent=\"QAjpO0AhZiQws79laQFl-81\" vertex=\"1\"><mxGeometry y=\"182\" width=\"140\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-89\" value=\"+ storage\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" parent=\"QAjpO0AhZiQws79laQFl-81\" vertex=\"1\"><mxGeometry y=\"208\" width=\"140\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-90\" value=\"ComponentSelectorImpl\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" vertex=\"1\"><mxGeometry x=\"467\" y=\"800\" width=\"240\" height=\"266\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-271\" value=\"- motherboard :CompatibilityComponent\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"QAjpO0AhZiQws79laQFl-90\"><mxGeometry y=\"26\" width=\"240\" height=\"24\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-272\" value=\"-gpu : CompatibilityComponent\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"QAjpO0AhZiQws79laQFl-90\"><mxGeometry y=\"50\" width=\"240\" height=\"20\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-91\" value=\"- collections : ComponentCollections\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" parent=\"QAjpO0AhZiQws79laQFl-90\" vertex=\"1\"><mxGeometry y=\"70\" width=\"240\" height=\"20\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-92\" value=\"\" style=\"line;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;strokeColor=inherit;\" parent=\"QAjpO0AhZiQws79laQFl-90\" vertex=\"1\"><mxGeometry y=\"90\" width=\"240\" height=\"8\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-353\" value=\"- selectMotherboard : MotherboardEntity\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"QAjpO0AhZiQws79laQFl-90\"><mxGeometry y=\"98\" width=\"240\" height=\"22\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-352\" value=\"- selectCase : CaseEntity\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"QAjpO0AhZiQws79laQFl-90\"><mxGeometry y=\"120\" width=\"240\" height=\"20\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-354\" value=\"- selectCpu : CpuEntity\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"QAjpO0AhZiQws79laQFl-90\"><mxGeometry y=\"140\" width=\"240\" height=\"20\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-355\" value=\"- selectGpu : GpuEntity\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"QAjpO0AhZiQws79laQFl-90\"><mxGeometry y=\"160\" width=\"240\" height=\"20\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-357\" value=\"- selectCpuCooler : CpuCoolerEntity\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"QAjpO0AhZiQws79laQFl-90\"><mxGeometry y=\"180\" width=\"240\" height=\"20\" as=\"geometry\"/></mxCell><mxCell id=\"QAjpO0AhZiQws79laQFl-93\" value=\"- selectRam: RamEntity\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" parent=\"QAjpO0AhZiQws79laQFl-90\" vertex=\"1\"><mxGeometry y=\"200\" width=\"240\" height=\"20\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-356\" value=\"- selectStorage : StorageEntity\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"QAjpO0AhZiQws79laQFl-90\"><mxGeometry y=\"220\" width=\"240\" height=\"20\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-351\" value=\"- selectPowerUnit : PowerUnitEntity\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"QAjpO0AhZiQws79laQFl-90\"><mxGeometry y=\"240\" width=\"240\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-0\" value=\"CartController\" style=\"swimlane;fontStyle=2;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"1080\" y=\"10\" width=\"190\" height=\"260\" as=\"geometry\"><mxRectangle x=\"230\" y=\"140\" width=\"160\" height=\"26\" as=\"alternateBounds\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-1\" value=\"-ShoppingCartFacade\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-0\"><mxGeometry y=\"26\" width=\"190\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-2\" value=\"-SimpleCookieFactory\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-0\"><mxGeometry y=\"52\" width=\"190\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-3\" value=\"-COOKIE_NAME\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-0\"><mxGeometry y=\"78\" width=\"190\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-4\" value=\"\" style=\"line;html=1;strokeWidth=1;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-0\"><mxGeometry y=\"104\" width=\"190\" height=\"8\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-5\" value=\"+addProduct\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=11;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-0\"><mxGeometry y=\"112\" width=\"190\" height=\"28\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-6\" value=\"+remove\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=11;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-0\"><mxGeometry y=\"140\" width=\"190\" height=\"28\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-7\" value=\"+view : ResponseEntity&lt;Object&gt;\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=11;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-0\"><mxGeometry y=\"168\" width=\"190\" height=\"28\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-8\" value=\"+get-size : int\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=11;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-0\"><mxGeometry y=\"196\" width=\"190\" height=\"28\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-9\" value=\"+clear\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=11;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-0\"><mxGeometry y=\"224\" width=\"190\" height=\"28\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-10\" value=\"UserController\" style=\"swimlane;fontStyle=2;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"1680\" y=\"20\" width=\"190\" height=\"180\" as=\"geometry\"><mxRectangle x=\"230\" y=\"140\" width=\"160\" height=\"26\" as=\"alternateBounds\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-11\" value=\"-RegistrationService\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-10\"><mxGeometry y=\"26\" width=\"190\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-12\" value=\"-LoginService\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-10\"><mxGeometry y=\"52\" width=\"190\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-14\" value=\"\" style=\"line;html=1;strokeWidth=1;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-10\"><mxGeometry y=\"78\" width=\"190\" height=\"8\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-15\" value=\"+register : AuthenticationResponse\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=11;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-10\"><mxGeometry y=\"86\" width=\"190\" height=\"28\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-16\" value=\"+login : AuthenticationResponse\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=11;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-10\"><mxGeometry y=\"114\" width=\"190\" height=\"28\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-17\" value=\"+checkStatus : String\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=11;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-10\"><mxGeometry y=\"142\" width=\"190\" height=\"28\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-22\" value=\"ShoppingCartFacadeImpl\" style=\"swimlane;fontStyle=2;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"1290\" y=\"646.5\" width=\"190\" height=\"178\" as=\"geometry\"><mxRectangle x=\"230\" y=\"140\" width=\"160\" height=\"26\" as=\"alternateBounds\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-23\" value=\"-CartLoggedOfffService\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-22\"><mxGeometry y=\"26\" width=\"190\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-24\" value=\"-CartLoggedInService\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-22\"><mxGeometry y=\"52\" width=\"190\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-86\" value=\"-ShoppingCart&#10;\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-22\"><mxGeometry y=\"78\" width=\"190\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-25\" value=\"-Subject subject\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-22\"><mxGeometry y=\"104\" width=\"190\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-52\" value=\"&amp;lt;&amp;lt;Interface&amp;gt;&amp;gt;&lt;br&gt;ShoppingCart\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=40;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"1100\" y=\"336\" width=\"150\" height=\"170\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-53\" value=\"+addItem\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=10;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-52\"><mxGeometry y=\"40\" width=\"150\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-54\" value=\"+removeItem\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=10;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-52\"><mxGeometry y=\"66\" width=\"150\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-55\" value=\"+clear\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=10;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-52\"><mxGeometry y=\"92\" width=\"150\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-60\" value=\"+view : List&amp;lt;Computer&amp;gt;\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=10;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-52\"><mxGeometry y=\"118\" width=\"150\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-61\" value=\"+getSize : int\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=10;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-52\"><mxGeometry y=\"144\" width=\"150\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-62\" value=\"&amp;lt;&amp;lt;Interface&amp;gt;&amp;gt;&lt;br&gt;Subject\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=40;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"1370\" y=\"321.5\" width=\"150\" height=\"118\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-63\" value=\"+subscribe\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=10;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-62\"><mxGeometry y=\"40\" width=\"150\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-64\" value=\"+unsubscribe\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=10;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-62\"><mxGeometry y=\"66\" width=\"150\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-65\" value=\"+notifySubscribers\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=10;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-62\"><mxGeometry y=\"92\" width=\"150\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-72\" value=\"CartLoggedOffService\" style=\"swimlane;fontStyle=2;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"860\" y=\"540\" width=\"190\" height=\"90\" as=\"geometry\"><mxRectangle x=\"230\" y=\"140\" width=\"160\" height=\"26\" as=\"alternateBounds\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-73\" value=\"-ComponentService\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-72\"><mxGeometry y=\"26\" width=\"190\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-74\" value=\"-CartItemRepository\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-72\"><mxGeometry y=\"52\" width=\"190\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-82\" value=\"CartLoggedInfService\" style=\"swimlane;fontStyle=2;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"1080\" y=\"570.5\" width=\"190\" height=\"110\" as=\"geometry\"><mxRectangle x=\"230\" y=\"140\" width=\"160\" height=\"26\" as=\"alternateBounds\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-83\" value=\"-ComponentService\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-82\"><mxGeometry y=\"26\" width=\"190\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-84\" value=\"-CartItemRepository\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-82\"><mxGeometry y=\"52\" width=\"190\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-85\" value=\"-JWTService\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-82\"><mxGeometry y=\"78\" width=\"190\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-87\" value=\"&amp;lt;&amp;lt;Interface&amp;gt;&amp;gt;&lt;br&gt;ShoppingCartFacade\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=40;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"1310\" y=\"490.5\" width=\"150\" height=\"66\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-93\" value=\"&amp;lt;&amp;lt;Interface&amp;gt;&amp;gt;&lt;br&gt;CartItemRepository\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=40;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"880\" y=\"687\" width=\"150\" height=\"92\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-94\" value=\"+findAllByToken : List&amp;lt;CartItemEntity&amp;gt;\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=10;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-93\"><mxGeometry y=\"40\" width=\"150\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-95\" value=\"+deleteAllByToken\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=10;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-93\"><mxGeometry y=\"66\" width=\"150\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-97\" value=\"&amp;lt;&amp;lt;Interface&amp;gt;&amp;gt;&lt;br&gt;UserRepository\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=40;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"1610\" y=\"585\" width=\"150\" height=\"118\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-98\" value=\"+loadByUsername : UserDetails\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=10;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-97\"><mxGeometry y=\"40\" width=\"150\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-109\" value=\"+signUpUser : AppUser\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=10;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-97\"><mxGeometry y=\"66\" width=\"150\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-100\" value=\"+enablelAppUser : int\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=10;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-97\"><mxGeometry y=\"92\" width=\"150\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-110\" value=\"RegistrationService\" style=\"swimlane;fontStyle=2;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"1644\" y=\"358\" width=\"226\" height=\"150\" as=\"geometry\"><mxRectangle x=\"230\" y=\"140\" width=\"160\" height=\"26\" as=\"alternateBounds\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-111\" value=\"-EmailValidator\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-110\"><mxGeometry y=\"26\" width=\"226\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-114\" value=\"-UserService\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-110\"><mxGeometry y=\"52\" width=\"226\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-112\" value=\"-JwtService\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-110\"><mxGeometry y=\"78\" width=\"226\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-117\" value=\"\" style=\"swimlane;startSize=0;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-110\"><mxGeometry y=\"104\" width=\"226\" height=\"46\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-116\" value=\"+ register : AuthenticationResponse\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-117\"><mxGeometry y=\"11\" width=\"220\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-119\" value=\"LoginService\" style=\"swimlane;fontStyle=2;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"1890\" y=\"356\" width=\"226\" height=\"150\" as=\"geometry\"><mxRectangle x=\"230\" y=\"140\" width=\"160\" height=\"26\" as=\"alternateBounds\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-120\" value=\"-UserService\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-119\"><mxGeometry y=\"26\" width=\"226\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-121\" value=\"-AuthenticationManager\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-119\"><mxGeometry y=\"52\" width=\"226\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-122\" value=\"-JwtService\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-119\"><mxGeometry y=\"78\" width=\"226\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-123\" value=\"\" style=\"swimlane;startSize=0;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-119\"><mxGeometry y=\"104\" width=\"226\" height=\"46\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-124\" value=\"+ login : AuthenticationResponse\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-123\"><mxGeometry y=\"11\" width=\"220\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-125\" value=\"EmailValidator\" style=\"swimlane;fontStyle=2;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"2010\" y=\"180\" width=\"226\" height=\"52\" as=\"geometry\"><mxRectangle x=\"230\" y=\"140\" width=\"160\" height=\"26\" as=\"alternateBounds\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-131\" value=\"+validate : boolean\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-125\"><mxGeometry y=\"26\" width=\"226\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-132\" value=\"JwtService\" style=\"swimlane;fontStyle=2;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"1770\" y=\"730\" width=\"260\" height=\"280\" as=\"geometry\"><mxRectangle x=\"230\" y=\"140\" width=\"160\" height=\"26\" as=\"alternateBounds\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-133\" value=\"-String secretKey\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-132\"><mxGeometry y=\"26\" width=\"260\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-136\" value=\"\" style=\"swimlane;startSize=0;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-132\"><mxGeometry y=\"52\" width=\"260\" height=\"228\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-137\" value=\"+ extractUsername : String\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-136\"><mxGeometry y=\"11\" width=\"220\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-138\" value=\"+ extractClaims : T\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-136\"><mxGeometry y=\"37\" width=\"220\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-139\" value=\"- extractAllClaims : Claims\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-136\"><mxGeometry y=\"63\" width=\"220\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-140\" value=\"- getSigningKey : Key\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-136\"><mxGeometry y=\"89\" width=\"220\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-141\" value=\"+ generateToken : String\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-136\"><mxGeometry y=\"115\" width=\"220\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-142\" value=\"+ isTokenValid : boolean\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-136\"><mxGeometry y=\"141\" width=\"220\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-143\" value=\"+ isTokenExpired : boolean\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-136\"><mxGeometry y=\"167\" width=\"220\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-144\" value=\"- extractExpiration : Date\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-136\"><mxGeometry y=\"193\" width=\"220\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-145\" value=\"JwtAuthFilter\" style=\"swimlane;fontStyle=2;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"2110\" y=\"680.5\" width=\"226\" height=\"124\" as=\"geometry\"><mxRectangle x=\"230\" y=\"140\" width=\"160\" height=\"26\" as=\"alternateBounds\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-146\" value=\"-UserDetailsService\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-145\"><mxGeometry y=\"26\" width=\"226\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-148\" value=\"-JwtService\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-145\"><mxGeometry y=\"52\" width=\"226\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-149\" value=\"\" style=\"swimlane;startSize=0;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-145\"><mxGeometry y=\"78\" width=\"226\" height=\"46\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-150\" value=\"+ doFilterInternal\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-149\"><mxGeometry y=\"11\" width=\"220\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-151\" value=\"WebSecurityConfig\" style=\"swimlane;fontStyle=2;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"2290\" y=\"438.5\" width=\"255\" height=\"170\" as=\"geometry\"><mxRectangle x=\"230\" y=\"140\" width=\"160\" height=\"26\" as=\"alternateBounds\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-157\" value=\"-JwtAthFilter\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-151\"><mxGeometry y=\"26\" width=\"255\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-154\" value=\"-AuthenticationProvider\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-151\"><mxGeometry y=\"52\" width=\"255\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-155\" value=\"\" style=\"swimlane;startSize=0;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-151\"><mxGeometry y=\"78\" width=\"255\" height=\"92\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-156\" value=\"+filterChain : SecurityFilterChain\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-155\"><mxGeometry y=\"11\" width=\"220\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-158\" value=\"+ corsConfigurationSource &#10;: CorsConfigurationSource\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-155\"><mxGeometry y=\"37\" width=\"250\" height=\"53\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-159\" value=\"AuthProviderConfig\" style=\"swimlane;fontStyle=2;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"2450\" y=\"680.5\" width=\"255\" height=\"170\" as=\"geometry\"><mxRectangle x=\"230\" y=\"140\" width=\"160\" height=\"26\" as=\"alternateBounds\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-160\" value=\"-UserDetailsService\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-159\"><mxGeometry y=\"26\" width=\"255\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-161\" value=\"-PasswordEncoder\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-159\"><mxGeometry y=\"52\" width=\"255\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-162\" value=\"\" style=\"swimlane;startSize=0;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-159\"><mxGeometry y=\"78\" width=\"255\" height=\"92\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-163\" value=\"+authenticatioinManager &#10;: AuthenticationManager\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-162\"><mxGeometry y=\"11\" width=\"220\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-164\" value=\"+authenticationProvider &#10;: AuthenticationProvider\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-162\"><mxGeometry y=\"50\" width=\"250\" height=\"40\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-165\" value=\"PasswordEncoderConfig\" style=\"swimlane;fontStyle=2;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"2630\" y=\"497\" width=\"226\" height=\"53\" as=\"geometry\"><mxRectangle x=\"230\" y=\"140\" width=\"160\" height=\"26\" as=\"alternateBounds\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-166\" value=\"+ passwordEncoder : PasswordEncoder\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-165\"><mxGeometry y=\"26\" width=\"226\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-170\" value=\"SeleniunScraper\" style=\"swimlane;fontStyle=2;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"2990\" y=\"170\" width=\"305\" height=\"450\" as=\"geometry\"><mxRectangle x=\"230\" y=\"140\" width=\"160\" height=\"26\" as=\"alternateBounds\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-172\" value=\"-scrapedProducts :&#10; HashMap&lt;String,HashMap&lt;String,Object&gt;&gt;\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-170\"><mxGeometry y=\"26\" width=\"305\" height=\"40\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-176\" value=\"-driver : WebDriver\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-170\"><mxGeometry y=\"66\" width=\"305\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-178\" value=\"-compatibleIds : ArrayList\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-170\"><mxGeometry y=\"92\" width=\"305\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-177\" value=\"-BASE_URL : String\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-170\"><mxGeometry y=\"118\" width=\"305\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-171\" value=\"-id : long\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-170\"><mxGeometry y=\"144\" width=\"305\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-173\" value=\"\" style=\"swimlane;startSize=0;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-170\"><mxGeometry y=\"170\" width=\"305\" height=\"280\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-175\" value=\"+scrapePrices : List&lt;Double&gt;\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-173\"><mxGeometry y=\"50\" width=\"250\" height=\"40\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-174\" value=\"+createProductMap &#10;: HashMap&lt;String,HashMap&lt;String,Object&gt;&gt;\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-173\"><mxGeometry y=\"10\" width=\"250\" height=\"40\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-179\" value=\"-scrapeProductLinks : List&lt;WebElement&gt;\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-173\"><mxGeometry y=\"80\" width=\"255\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-180\" value=\"-scrapeProduct : HashMap&lt;String,Object&gt;\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-173\"><mxGeometry y=\"110\" width=\"255\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-181\" value=\"-getVariantMap : HashMap&lt;String,List&lt;String&gt;&gt;\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-173\"><mxGeometry y=\"136\" width=\"255\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-182\" value=\"-getElementRecursice\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-173\"><mxGeometry y=\"162\" width=\"255\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-183\" value=\"-getLinkByText : String\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-173\"><mxGeometry y=\"188\" width=\"255\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-184\" value=\"+compatibleProductsSuperviser\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-173\"><mxGeometry y=\"219\" width=\"255\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-185\" value=\"-wait\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-173\"><mxGeometry y=\"250\" width=\"255\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-186\" value=\"SeleniumJsonMapper\" style=\"swimlane;fontStyle=2;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"3015\" y=\"679.5\" width=\"255\" height=\"182\" as=\"geometry\"><mxRectangle x=\"230\" y=\"140\" width=\"160\" height=\"26\" as=\"alternateBounds\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-187\" value=\"-JwtAthFilter\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-186\"><mxGeometry y=\"26\" width=\"255\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-188\" value=\"-AuthenticationProvider\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-186\"><mxGeometry y=\"52\" width=\"255\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-189\" value=\"\" style=\"swimlane;startSize=0;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-186\"><mxGeometry y=\"78\" width=\"255\" height=\"104\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-190\" value=\"+ generatePart : HashMap&lt;String,Object&gt;\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-189\"><mxGeometry y=\"11\" width=\"220\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-191\" value=\"+ jsonToMap &#10;: HashMap&lt;String,HashMap&lt;String,Object&gt;&gt;\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-189\"><mxGeometry y=\"37\" width=\"250\" height=\"53\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-192\" value=\"+ mapToJson : String\" style=\"text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-189\"><mxGeometry y=\"78\" width=\"220\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-201\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" target=\"QAjpO0AhZiQws79laQFl-8\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"340\" y=\"180\" as=\"sourcePoint\"/><mxPoint x=\"340\" y=\"130\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-202\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" target=\"QAjpO0AhZiQws79laQFl-3\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"340\" y=\"180\" as=\"sourcePoint\"/><mxPoint x=\"360\" y=\"200\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-203\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" target=\"QAjpO0AhZiQws79laQFl-14\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"340\" y=\"180\" as=\"sourcePoint\"/><mxPoint x=\"450\" y=\"300\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-205\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;exitX=0.494;exitY=1.168;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"QAjpO0AhZiQws79laQFl-15\" target=\"QAjpO0AhZiQws79laQFl-19\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"260\" y=\"480\" as=\"sourcePoint\"/><mxPoint x=\"420\" y=\"480\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-206\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;exitX=0;exitY=0.5;exitDx=0;exitDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"QAjpO0AhZiQws79laQFl-26\" target=\"QAjpO0AhZiQws79laQFl-43\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"260\" y=\"674\" as=\"sourcePoint\"/><mxPoint x=\"420\" y=\"610\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-207\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"QAjpO0AhZiQws79laQFl-27\" target=\"QAjpO0AhZiQws79laQFl-58\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"230\" y=\"640\" as=\"sourcePoint\"/><mxPoint x=\"390\" y=\"640\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-209\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"QAjpO0AhZiQws79laQFl-24\" target=\"QAjpO0AhZiQws79laQFl-59\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"280\" y=\"580\" as=\"sourcePoint\"/><mxPoint x=\"440\" y=\"580\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-211\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;exitX=0.75;exitY=0;exitDx=0;exitDy=0;entryX=0.488;entryY=1.107;entryDx=0;entryDy=0;entryPerimeter=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"QAjpO0AhZiQws79laQFl-59\" target=\"QAjpO0AhZiQws79laQFl-89\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"430\" y=\"880\" as=\"sourcePoint\"/><mxPoint x=\"590\" y=\"880\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-212\" value=\"Extends\" style=\"endArrow=block;endSize=16;endFill=0;html=1;rounded=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;entryX=0.5;entryY=1.1;entryDx=0;entryDy=0;entryPerimeter=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"QAjpO0AhZiQws79laQFl-90\" target=\"QAjpO0AhZiQws79laQFl-60\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"430\" y=\"920\" as=\"sourcePoint\"/><mxPoint x=\"590\" y=\"920\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-213\" value=\"ComponentCollections\" style=\"swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"790\" y=\"890\" width=\"150\" height=\"234\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-214\" value=\"+List&amp;lt;MotherBoard&amp;gt;\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-213\"><mxGeometry y=\"26\" width=\"150\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-215\" value=\"+List&amp;lt;Case&amp;gt;\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-213\"><mxGeometry y=\"52\" width=\"150\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-216\" value=\"+List&amp;lt;Cpu&amp;gt;\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-213\"><mxGeometry y=\"78\" width=\"150\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-217\" value=\"+List&amp;lt;CpuCooler&amp;gt;\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-213\"><mxGeometry y=\"104\" width=\"150\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-218\" value=\"+List&amp;lt;Gpu&amp;gt;\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-213\"><mxGeometry y=\"130\" width=\"150\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-219\" value=\"+List&amp;lt;Ram&amp;gt;\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-213\"><mxGeometry y=\"156\" width=\"150\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-220\" value=\"+List&amp;lt;PowerUnit&amp;gt;\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-213\"><mxGeometry y=\"182\" width=\"150\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-221\" value=\"+List&amp;lt;Storage&amp;gt;\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-213\"><mxGeometry y=\"208\" width=\"150\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-224\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"QAjpO0AhZiQws79laQFl-24\" target=\"QAjpO0AhZiQws79laQFl-85\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"360\" y=\"640\" as=\"sourcePoint\"/><mxPoint x=\"520\" y=\"640\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-225\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"QAjpO0AhZiQws79laQFl-59\" target=\"Hm2G-BV6Gx177GrmphrW-213\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"390\" y=\"990\" as=\"sourcePoint\"/><mxPoint x=\"550\" y=\"990\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-227\" value=\"Extends\" style=\"endArrow=block;endSize=16;endFill=0;html=1;rounded=0;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"QAjpO0AhZiQws79laQFl-64\" target=\"QAjpO0AhZiQws79laQFl-67\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"205\" y=\"1080\" as=\"sourcePoint\"/><mxPoint x=\"495\" y=\"1050\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-233\" value=\"CpuEntity\" style=\"swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"535\" y=\"1360\" width=\"140\" height=\"52\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-237\" value=\"CaseEntity\" style=\"swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"230\" y=\"1360\" width=\"140\" height=\"52\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-239\" value=\"PowerUnitEntity\" style=\"swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"850\" y=\"1360\" width=\"140\" height=\"52\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-241\" value=\"MotherboardEntity\" style=\"swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"-85\" y=\"1362\" width=\"140\" height=\"52\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-243\" value=\"CpuCoolerEntity\" style=\"swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"385\" y=\"1360\" width=\"140\" height=\"52\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-245\" value=\"RamEntity\" style=\"swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"692\" y=\"1360\" width=\"140\" height=\"52\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-247\" value=\"GpuEntity\" style=\"swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"75\" y=\"1362\" width=\"140\" height=\"52\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-249\" value=\"StorageEntity\" style=\"swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"1010\" y=\"1362\" width=\"140\" height=\"52\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-252\" value=\"Extends\" style=\"endArrow=block;endSize=16;endFill=0;html=1;rounded=0;exitX=0.153;exitY=-0.021;exitDx=0;exitDy=0;entryX=0.608;entryY=0.969;entryDx=0;entryDy=0;entryPerimeter=0;exitPerimeter=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-247\" target=\"QAjpO0AhZiQws79laQFl-78\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"365\" y=\"1210\" as=\"sourcePoint\"/><mxPoint x=\"525\" y=\"1210\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-253\" value=\"Extends\" style=\"endArrow=block;endSize=16;endFill=0;html=1;rounded=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;entryX=0.419;entryY=1.121;entryDx=0;entryDy=0;entryPerimeter=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-241\" target=\"QAjpO0AhZiQws79laQFl-78\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"-85\" y=\"1290\" as=\"sourcePoint\"/><mxPoint x=\"5\" y=\"1310\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-257\" value=\"Extends\" style=\"endArrow=block;endSize=16;endFill=0;html=1;rounded=0;entryX=0.499;entryY=1.212;entryDx=0;entryDy=0;entryPerimeter=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" target=\"QAjpO0AhZiQws79laQFl-66\"><mxGeometry x=\"-0.0116\" width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"555\" y=\"1300\" as=\"sourcePoint\"/><mxPoint x=\"475\" y=\"1300\" as=\"targetPoint\"/><mxPoint as=\"offset\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-258\" value=\"\" style=\"endArrow=none;html=1;rounded=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"35\" y=\"1300\" as=\"sourcePoint\"/><mxPoint x=\"907.2222900390625\" y=\"1300\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-260\" value=\"\" style=\"endArrow=none;html=1;rounded=0;exitX=0.853;exitY=-0.004;exitDx=0;exitDy=0;exitPerimeter=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-241\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"5\" y=\"1370\" as=\"sourcePoint\"/><mxPoint x=\"35\" y=\"1300\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-261\" value=\"\" style=\"endArrow=none;html=1;rounded=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-247\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"205\" y=\"1370\" as=\"sourcePoint\"/><mxPoint x=\"145\" y=\"1300\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-262\" value=\"\" style=\"endArrow=none;html=1;rounded=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-237\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"375\" y=\"1350\" as=\"sourcePoint\"/><mxPoint x=\"300\" y=\"1300\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-263\" value=\"\" style=\"endArrow=none;html=1;rounded=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-243\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"585\" y=\"1350\" as=\"sourcePoint\"/><mxPoint x=\"455\" y=\"1300\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-264\" value=\"\" style=\"endArrow=none;html=1;rounded=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-233\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"585\" y=\"1350\" as=\"sourcePoint\"/><mxPoint x=\"605\" y=\"1300\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-265\" value=\"\" style=\"endArrow=none;html=1;rounded=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-245\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"725\" y=\"1350\" as=\"sourcePoint\"/><mxPoint x=\"762\" y=\"1300\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-266\" value=\"\" style=\"endArrow=none;html=1;rounded=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-239\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"865\" y=\"1350\" as=\"sourcePoint\"/><mxPoint x=\"920\" y=\"1300\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-267\" value=\"\" style=\"endArrow=none;html=1;rounded=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"905\" y=\"1300\" as=\"sourcePoint\"/><mxPoint x=\"1085\" y=\"1300\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-268\" value=\"\" style=\"endArrow=none;html=1;rounded=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"1085\" y=\"1360\" as=\"sourcePoint\"/><mxPoint x=\"1085\" y=\"1300\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-269\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"QAjpO0AhZiQws79laQFl-60\" target=\"QAjpO0AhZiQws79laQFl-77\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"190\" y=\"960\" as=\"sourcePoint\"/><mxPoint x=\"350\" y=\"960\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-274\" value=\"BasicCFactory\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"-400\" y=\"680.5\" width=\"160\" height=\"52\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-280\" value=\"ContentCreatorCFactory\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"-400\" y=\"812.5\" width=\"160\" height=\"52\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-286\" value=\"DeepLearnginCFactory\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"-400\" y=\"886.5\" width=\"160\" height=\"52\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-292\" value=\"CryptoCFactory\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"-400\" y=\"1026.5\" width=\"160\" height=\"52\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-298\" value=\"GamingCFactory\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"-400\" y=\"954.5\" width=\"160\" height=\"52\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-299\" value=\"HomeTheaterCFactory\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"-400\" y=\"744.5\" width=\"160\" height=\"52\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-300\" value=\"SecurityCFactory\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"-400\" y=\"461.5\" width=\"160\" height=\"52\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-301\" value=\"SilentCFactory\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"-400\" y=\"536.5\" width=\"160\" height=\"52\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-302\" value=\"VirtualRealityCFactory\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"-400\" y=\"394.5\" width=\"160\" height=\"52\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-303\" value=\"WorkStationCFactory\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"-400\" y=\"321.5\" width=\"160\" height=\"52\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-308\" value=\"\" style=\"endArrow=none;html=1;rounded=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" target=\"Hm2G-BV6Gx177GrmphrW-303\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"-170\" y=\"347.5\" as=\"sourcePoint\"/><mxPoint x=\"200\" y=\"604.5\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-309\" value=\"\" style=\"endArrow=none;html=1;rounded=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"-170\" y=\"419.94000000000005\" as=\"sourcePoint\"/><mxPoint x=\"-240\" y=\"419.94000000000005\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-310\" value=\"\" style=\"endArrow=none;html=1;rounded=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"-170\" y=\"486.94000000000005\" as=\"sourcePoint\"/><mxPoint x=\"-240\" y=\"486.94000000000005\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-311\" value=\"\" style=\"endArrow=none;html=1;rounded=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"-170\" y=\"561.94\" as=\"sourcePoint\"/><mxPoint x=\"-240\" y=\"561.94\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-312\" value=\"\" style=\"endArrow=none;html=1;rounded=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"-170\" y=\"636.94\" as=\"sourcePoint\"/><mxPoint x=\"-240\" y=\"636.94\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-313\" value=\"\" style=\"endArrow=none;html=1;rounded=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"-170\" y=\"911.94\" as=\"sourcePoint\"/><mxPoint x=\"-240\" y=\"911.94\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-314\" value=\"\" style=\"endArrow=none;html=1;rounded=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"-170\" y=\"979.94\" as=\"sourcePoint\"/><mxPoint x=\"-240\" y=\"979.94\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-315\" value=\"\" style=\"endArrow=none;html=1;rounded=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"-170\" y=\"769.94\" as=\"sourcePoint\"/><mxPoint x=\"-240\" y=\"769.94\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-316\" value=\"\" style=\"endArrow=none;html=1;rounded=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"-170\" y=\"837.94\" as=\"sourcePoint\"/><mxPoint x=\"-240\" y=\"837.94\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-317\" value=\"\" style=\"endArrow=none;html=1;rounded=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"-170\" y=\"705.94\" as=\"sourcePoint\"/><mxPoint x=\"-240\" y=\"705.94\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-318\" value=\"\" style=\"endArrow=none;html=1;rounded=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"-170\" y=\"1051.94\" as=\"sourcePoint\"/><mxPoint x=\"-240\" y=\"1051.94\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-319\" value=\"\" style=\"endArrow=none;html=1;rounded=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\"><mxPoint x=\"-170\" y=\"1058.4506022135417\" as=\"sourcePoint\"/><mxPoint x=\"-170\" y=\"344.5\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-349\" value=\"Extends\" style=\"endArrow=block;endSize=16;endFill=0;html=1;rounded=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" target=\"QAjpO0AhZiQws79laQFl-23\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"-170\" y=\"700\" as=\"sourcePoint\"/><mxPoint x=\"70\" y=\"780\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-358\" value=\"&amp;lt;&amp;lt;Interface&amp;gt;&amp;gt;&lt;br&gt;ComponentFilterer\" style=\"swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=40;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\"><mxGeometry x=\"765\" y=\"1176\" width=\"200\" height=\"66\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-359\" value=\"+findBestMatch : ComponentEntity\" style=\"text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;fontSize=11;\" vertex=\"1\" parent=\"Hm2G-BV6Gx177GrmphrW-358\"><mxGeometry y=\"40\" width=\"200\" height=\"26\" as=\"geometry\"/></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-360\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;entryX=0.25;entryY=0;entryDx=0;entryDy=0;exitX=0.703;exitY=1.147;exitDx=0;exitDy=0;exitPerimeter=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-351\" target=\"Hm2G-BV6Gx177GrmphrW-358\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"656\" y=\"1065\" as=\"sourcePoint\"/><mxPoint x=\"790\" y=\"1170\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-361\" value=\"\" style=\"endArrow=diamondThin;endFill=0;endSize=24;html=1;rounded=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"QAjpO0AhZiQws79laQFl-65\" target=\"Hm2G-BV6Gx177GrmphrW-217\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"590\" y=\"1090\" as=\"sourcePoint\"/><mxPoint x=\"750\" y=\"1090\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-363\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;entryX=0.482;entryY=1.079;entryDx=0;entryDy=0;entryPerimeter=0;exitX=0;exitY=0.5;exitDx=0;exitDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-352\" target=\"QAjpO0AhZiQws79laQFl-44\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"240\" y=\"890\" as=\"sourcePoint\"/><mxPoint x=\"400\" y=\"890\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-364\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" target=\"Hm2G-BV6Gx177GrmphrW-52\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"1175\" y=\"270\" as=\"sourcePoint\"/><mxPoint x=\"1180\" y=\"370\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-365\" value=\"Extends\" style=\"endArrow=block;endSize=16;endFill=0;html=1;rounded=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-72\" target=\"Hm2G-BV6Gx177GrmphrW-55\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"1030\" y=\"490\" as=\"sourcePoint\"/><mxPoint x=\"1190\" y=\"490\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-366\" value=\"Extends\" style=\"endArrow=block;endSize=16;endFill=0;html=1;rounded=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-82\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"1030\" y=\"490\" as=\"sourcePoint\"/><mxPoint x=\"1175\" y=\"510\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-367\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-72\" target=\"Hm2G-BV6Gx177GrmphrW-93\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"1030\" y=\"680\" as=\"sourcePoint\"/><mxPoint x=\"1190\" y=\"680\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-368\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-82\" target=\"Hm2G-BV6Gx177GrmphrW-94\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"1030\" y=\"680\" as=\"sourcePoint\"/><mxPoint x=\"1190\" y=\"680\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-369\" value=\"Extends\" style=\"endArrow=block;endSize=16;endFill=0;html=1;rounded=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-87\" target=\"Hm2G-BV6Gx177GrmphrW-55\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"1220\" y=\"600\" as=\"sourcePoint\"/><mxPoint x=\"1380\" y=\"600\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-370\" value=\"Extends\" style=\"endArrow=block;endSize=16;endFill=0;html=1;rounded=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;entryX=0.541;entryY=1.01;entryDx=0;entryDy=0;entryPerimeter=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-87\" target=\"Hm2G-BV6Gx177GrmphrW-65\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"1220\" y=\"600\" as=\"sourcePoint\"/><mxPoint x=\"1380\" y=\"600\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-371\" value=\"Extends\" style=\"endArrow=block;endSize=16;endFill=0;html=1;rounded=0;entryX=0.5;entryY=1;entryDx=0;entryDy=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-22\" target=\"Hm2G-BV6Gx177GrmphrW-87\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"1390\" y=\"640\" as=\"sourcePoint\"/><mxPoint x=\"1380\" y=\"570\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-374\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-10\" target=\"Hm2G-BV6Gx177GrmphrW-110\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"1780\" y=\"440\" as=\"sourcePoint\"/><mxPoint x=\"1940\" y=\"440\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-375\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-10\" target=\"Hm2G-BV6Gx177GrmphrW-119\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"1780\" y=\"440\" as=\"sourcePoint\"/><mxPoint x=\"1940\" y=\"440\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-376\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-117\" target=\"Hm2G-BV6Gx177GrmphrW-97\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"1780\" y=\"590\" as=\"sourcePoint\"/><mxPoint x=\"1940\" y=\"590\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-377\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=1.036;entryY=-0.299;entryDx=0;entryDy=0;entryPerimeter=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-123\" target=\"Hm2G-BV6Gx177GrmphrW-109\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"1780\" y=\"590\" as=\"sourcePoint\"/><mxPoint x=\"1940\" y=\"590\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-378\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-117\" target=\"Hm2G-BV6Gx177GrmphrW-132\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"2080\" y=\"630\" as=\"sourcePoint\"/><mxPoint x=\"2240\" y=\"630\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-379\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.75;entryY=0;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-123\" target=\"Hm2G-BV6Gx177GrmphrW-132\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"2080\" y=\"630\" as=\"sourcePoint\"/><mxPoint x=\"2240\" y=\"630\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-380\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-148\" target=\"Hm2G-BV6Gx177GrmphrW-133\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"2360\" y=\"630\" as=\"sourcePoint\"/><mxPoint x=\"2520\" y=\"630\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-381\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-155\" target=\"Hm2G-BV6Gx177GrmphrW-145\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"2360\" y=\"630\" as=\"sourcePoint\"/><mxPoint x=\"2520\" y=\"630\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-382\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;exitX=0.528;exitY=1.079;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-158\" target=\"Hm2G-BV6Gx177GrmphrW-159\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"2360\" y=\"630\" as=\"sourcePoint\"/><mxPoint x=\"2520\" y=\"630\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-383\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;entryX=0.534;entryY=1.274;entryDx=0;entryDy=0;entryPerimeter=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" target=\"Hm2G-BV6Gx177GrmphrW-166\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"2580\" y=\"680\" as=\"sourcePoint\"/><mxPoint x=\"2520\" y=\"630\" as=\"targetPoint\"/></mxGeometry></mxCell><mxCell id=\"Hm2G-BV6Gx177GrmphrW-384\" value=\"Use\" style=\"endArrow=open;endSize=12;dashed=1;html=1;rounded=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;\" edge=\"1\" parent=\"WIyWlLk6GJQsqaUBKTNV-1\" source=\"Hm2G-BV6Gx177GrmphrW-173\" target=\"Hm2G-BV6Gx177GrmphrW-186\"><mxGeometry width=\"160\" relative=\"1\" as=\"geometry\"><mxPoint x=\"3080\" y=\"630\" as=\"sourcePoint\"/><mxPoint x=\"3240\" y=\"630\" as=\"targetPoint\"/></mxGeometry></mxCell></root></mxGraphModel></diagram></mxfile>","toolbar":"pages zoom layers lightbox","page":0}'
        >
            <svg
                style={{
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    display: "block",
                    minWidth: 1096 * 2.1,
                    minHeight: 432 * 2.1,
                    backgroundImage: "none",
                    backgroundColor: "transparent"
                }}
            >
                <defs>
                    <filter id="dropShadow">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="1.7" result="blur" />
                        <feOffset in="blur" dx={3} dy={3} result="offsetBlur" />
                        <feFlood floodColor="#3D4574" floodOpacity="0.4" result="offsetColor" />
                        <feComposite
                            in="offsetColor"
                            in2="offsetBlur"
                            operator="in"
                            result="offsetBlur"
                        />
                        <feBlend in="SourceGraphic" in2="offsetBlur" />
                    </filter>
                </defs>
                <g transformorigin="0 0" transform="scale(0.60,0.60)translate(428,18)">
                    <g />
                    <g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 260 36 L 260 10 L 430 10 L 430 36"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 260 36 L 260 180 L 430 180 L 430 36"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 260 36 L 260 180 L 430 180 L 430 36"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 260 36 L 430 36"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 260 36 L 430 36"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                fontStyle="italic"
                                textAnchor="middle"
                                fontSize="12px"
                            >
                                <text x={345} y={28}>
                                    FactoryController
                                </text>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={265}
                                y={15}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={260}
                                y={36}
                                width={170}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={260}
                                y={36}
                                width={170}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-264-41-162-26-0">
                                <rect x={264} y={41} width={162} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-264-41-162-26-0)"
                                fontSize="12px"
                            >
                                <text x={266} y={54}>
                                    - FactoryStrategyContext
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={260}
                                y={62}
                                width={170}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={260}
                                y={62}
                                width={170}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-264-67-162-26-0">
                                <rect x={264} y={67} width={162} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-264-67-162-26-0)"
                                fontSize="12px"
                            >
                                <text x={266} y={80}>
                                    - FactoryRegistry
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={260}
                                y={88}
                                width={170}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={260}
                                y={88}
                                width={170}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-264-93-162-26-0">
                                <rect x={264} y={93} width={162} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-264-93-162-26-0)"
                                fontSize="12px"
                            >
                                <text x={266} y={106}>
                                    - StrategyRegistry
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 260 118 L 430 118"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 260 118 L 430 118"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={260}
                                y={122}
                                width={170}
                                height={38}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={260}
                                y={122}
                                width={170}
                                height={38}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-264-127-162-38-0">
                                <rect x={264} y={127} width={162} height={38} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-264-127-162-38-0)"
                                fontSize="11px"
                            >
                                <text x={266} y={139}>
                                    buildComputer(FactoryDTO){" "}
                                </text>
                                <text x={266} y={152}>
                                    : List&lt;ComputerDTO&gt;
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 170 256 L 170 230 L 310 230 L 310 256"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 170 256 L 170 230 L 310 230 L 310 256"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 170 256 L 170 280 L 310 280 L 310 256"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 170 256 L 170 280 L 310 280 L 310 256"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 170 256 L 310 256"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 170 256 L 310 256"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 138,
                                            height: 1,
                                            paddingTop: 243,
                                            marginLeft: 171
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                FactoryRegistry
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={175}
                                y={235}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={170}
                                y={256}
                                width={140}
                                height={24}
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 138,
                                            height: 1,
                                            paddingTop: 268,
                                            marginLeft: 171
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + factoryMao : HashMap
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 380 256 L 380 230 L 520 230 L 520 256"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 380 256 L 380 230 L 520 230 L 520 256"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 380 256 L 380 282 L 520 282 L 520 256"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 380 256 L 380 282 L 520 282 L 520 256"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 380 256 L 520 256"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 380 256 L 520 256"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 138,
                                            height: 1,
                                            paddingTop: 243,
                                            marginLeft: 381
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                StrategyRegistry
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={385}
                                y={235}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={380}
                                y={256}
                                width={140}
                                height={26}
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 138,
                                            height: 1,
                                            paddingTop: 269,
                                            marginLeft: 381
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + strategyMap : HashMap
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 235 334 L 235 308 L 445 308 L 445 334"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 235 334 L 235 358 L 445 358 L 445 334"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 235 334 L 235 358 L 445 358 L 445 334"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 235 334 L 445 334"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 235 334 L 445 334"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 208,
                                            height: 1,
                                            paddingTop: 315,
                                            marginLeft: 236
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                FactoryStrategyContext
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={240}
                                y={313}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={235}
                                y={334}
                                width={210}
                                height={24}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={235}
                                y={334}
                                width={210}
                                height={24}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 200,
                                            height: 1,
                                            paddingTop: 341,
                                            marginLeft: 241
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 20,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 8,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + executeStrategy(Factory, Strategy) : List&lt;Computer&gt;
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 260 601 L 260 561 L 420 561 L 420 601"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 260 601 L 260 765 L 420 765 L 420 601"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 260 601 L 260 765 L 420 765 L 420 601"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 260 601 L 420 601"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 260 601 L 420 601"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 158,
                                            height: 1,
                                            paddingTop: 568,
                                            marginLeft: 261
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                &lt;&lt;Abstract&gt;&gt;
                                                <br />
                                                AbstractComputerFactory
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={265}
                                y={566}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={260}
                                y={601}
                                width={160}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={260}
                                y={601}
                                width={160}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 150,
                                            height: 1,
                                            paddingTop: 608,
                                            marginLeft: 266
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 10,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                - selector : ComponentSelector
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 260 631 L 420 631"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 260 631 L 420 631"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={260}
                                y={635}
                                width={160}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={260}
                                y={635}
                                width={160}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 150,
                                            height: 1,
                                            paddingTop: 642,
                                            marginLeft: 266
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 9,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + buildeBudgetComputer : Computer
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={260}
                                y={661}
                                width={160}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={260}
                                y={661}
                                width={160}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 150,
                                            height: 1,
                                            paddingTop: 668,
                                            marginLeft: 266
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 9,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + buildMidTierComputer : Computer
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={260}
                                y={687}
                                width={160}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={260}
                                y={687}
                                width={160}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 150,
                                            height: 1,
                                            paddingTop: 694,
                                            marginLeft: 266
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 9,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + buildHighEndComputer : Computer
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={260}
                                y={713}
                                width={160}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={260}
                                y={713}
                                width={160}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 150,
                                            height: 1,
                                            paddingTop: 720,
                                            marginLeft: 266
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 8,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + buildEnthusiastComputer : Computer
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={260}
                                y={739}
                                width={160}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={260}
                                y={739}
                                width={160}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 150,
                                            height: 1,
                                            paddingTop: 746,
                                            marginLeft: 266
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 8,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                # buildComputer(budget,info) : Computer
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -50 812.5 L -50 772.5 L 110 772.5 L 110 812.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M -50 812.5 L -50 864.5 L 110 864.5 L 110 812.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -50 812.5 L -50 864.5 L 110 864.5 L 110 812.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M -50 812.5 L 110 812.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -50 812.5 L 110 812.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 158,
                                            height: 1,
                                            paddingTop: 780,
                                            marginLeft: "-49px"
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                &lt;&lt;Interface&gt;&gt;
                                                <br />
                                                Shuffler
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={-45}
                                y={777}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={-50}
                                y="812.5"
                                width={160}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={-50}
                                y="812.5"
                                width={160}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 150,
                                            height: 1,
                                            paddingTop: 820,
                                            marginLeft: "-44px"
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 10,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + shuffleValues(ComputerInfo)&nbsp;
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={-50}
                                y="838.5"
                                width={160}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={-50}
                                y="838.5"
                                width={160}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 150,
                                            height: 1,
                                            paddingTop: 846,
                                            marginLeft: "-44px"
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 10,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                - random() : float&nbsp;
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 40 455.5 L 40 429.5 L 180 429.5 L 180 455.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 40 455.5 L 40 429.5 L 180 429.5 L 180 455.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 40 455.5 L 40 663.5 L 180 663.5 L 180 455.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 40 455.5 L 40 663.5 L 180 663.5 L 180 455.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 40 455.5 L 180 455.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 40 455.5 L 180 455.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 138,
                                            height: 1,
                                            paddingTop: 443,
                                            marginLeft: 41
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                CompupterInfo
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={45}
                                y={434}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={40}
                                y="455.5"
                                width={140}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={40}
                                y="455.5"
                                width={140}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 130,
                                            height: 1,
                                            paddingTop: 463,
                                            marginLeft: 46
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + x_motherboard
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={40}
                                y="481.5"
                                width={140}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={40}
                                y="481.5"
                                width={140}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 130,
                                            height: 1,
                                            paddingTop: 489,
                                            marginLeft: 46
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + x_case
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={40}
                                y="507.5"
                                width={140}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={40}
                                y="507.5"
                                width={140}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 130,
                                            height: 1,
                                            paddingTop: 515,
                                            marginLeft: 46
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + x_cpu
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={40}
                                y="533.5"
                                width={140}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={40}
                                y="533.5"
                                width={140}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 130,
                                            height: 1,
                                            paddingTop: 541,
                                            marginLeft: 46
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +x_cpuCooler
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={40}
                                y="559.5"
                                width={140}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={40}
                                y="559.5"
                                width={140}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 130,
                                            height: 1,
                                            paddingTop: 567,
                                            marginLeft: 46
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + x_gpu
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={40}
                                y="585.5"
                                width={140}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={40}
                                y="585.5"
                                width={140}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 130,
                                            height: 1,
                                            paddingTop: 593,
                                            marginLeft: 46
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + x_ram
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={40}
                                y="611.5"
                                width={140}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={40}
                                y="611.5"
                                width={140}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 130,
                                            height: 1,
                                            paddingTop: 619,
                                            marginLeft: 46
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + x_powerUnit
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={40}
                                y="637.5"
                                width={140}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={40}
                                y="637.5"
                                width={140}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 130,
                                            height: 1,
                                            paddingTop: 645,
                                            marginLeft: 46
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + x_storage&nbsp;
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -400 637.5 L -400 611.5 L -240 611.5 L -240 637.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M -400 637.5 L -400 663.5 L -240 663.5 L -240 637.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 637.5 L -400 663.5 L -240 663.5 L -240 637.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M -400 637.5 L -240 637.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 637.5 L -240 637.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 158,
                                            height: 1,
                                            paddingTop: 619,
                                            marginLeft: "-399px"
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                AudioProductionCFactory
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={-395}
                                y={616}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 487 699.5 L 487 659.5 L 687 659.5 L 687 699.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 487 699.5 L 487 744.5 L 687 744.5 L 687 699.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 487 699.5 L 487 744.5 L 687 744.5 L 687 699.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 487 699.5 L 687 699.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 487 699.5 L 687 699.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 198,
                                            height: 1,
                                            paddingTop: 667,
                                            marginLeft: 488
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                &lt;&lt;Interface&gt;&gt;
                                                <br />
                                                ComponentSelector
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={492}
                                y={664}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={487}
                                y="699.5"
                                width={200}
                                height={45}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={487}
                                y="699.5"
                                width={200}
                                height={45}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 190,
                                            height: 1,
                                            paddingTop: 707,
                                            marginLeft: 493
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 41,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + selectComponents(ComputerInfo) : SelectedComponents&nbsp;
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 485 1130 L 485 1090 L 625 1090 L 625 1130"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 485 1130 L 485 1090 L 625 1090 L 625 1130"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 485 1130 L 485 1208 L 625 1208 L 625 1130"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 485 1130 L 485 1208 L 625 1208 L 625 1130"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 485 1130 L 625 1130"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 485 1130 L 625 1130"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 138,
                                            height: 1,
                                            paddingTop: 1110,
                                            marginLeft: 486
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                &lt;&lt;Abstract&gt;&gt;
                                                <br />
                                                ComponentEntity
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={490}
                                y={1095}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={485}
                                y={1130}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={485}
                                y={1130}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 130,
                                            height: 1,
                                            paddingTop: 1137,
                                            marginLeft: 491
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + price : BigDecimal
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={485}
                                y={1156}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={485}
                                y={1156}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 130,
                                            height: 1,
                                            paddingTop: 1163,
                                            marginLeft: 491
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + name : String
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={485}
                                y={1182}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={485}
                                y={1182}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 130,
                                            height: 1,
                                            paddingTop: 1189,
                                            marginLeft: 491
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + url : String
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 240 1150 L 240 1110 L 400 1110 L 400 1150"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 240 1150 L 240 1176 L 400 1176 L 400 1150"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 240 1150 L 240 1176 L 400 1176 L 400 1150"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 240 1150 L 400 1150"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 240 1150 L 400 1150"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 158,
                                            height: 1,
                                            paddingTop: 1117,
                                            marginLeft: 241
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                &lt;&lt;interface&gt;&gt;
                                                <br />
                                                CompositeComponent
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={245}
                                y={1115}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={240}
                                y={1150}
                                width={160}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={240}
                                y={1150}
                                width={160}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 150,
                                            height: 1,
                                            paddingTop: 1157,
                                            marginLeft: 246
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 10,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + getCombinedPrice : BigDecimal
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -65 1192 L -65 1152 L 135 1152 L 135 1192"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -65 1192 L -65 1152 L 135 1152 L 135 1192"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M -65 1192 L -65 1218 L 135 1218 L 135 1192"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -65 1192 L -65 1218 L 135 1218 L 135 1192"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M -65 1192 L 135 1192"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -65 1192 L 135 1192"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 198,
                                            height: 1,
                                            paddingTop: 1172,
                                            marginLeft: "-64px"
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                &lt;&lt;interface&gt;&gt;
                                                <br />
                                                CompatibilityComponent
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={-60}
                                y={1157}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={-65}
                                y={1192}
                                width={200}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={-65}
                                y={1192}
                                width={200}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 190,
                                            height: 1,
                                            paddingTop: 1199,
                                            marginLeft: "-59px"
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 9,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + checkCompatibility(Class&lt;T&gt;,id) : boolean&nbsp;
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 600 413 L 600 387 L 740 387 L 740 413"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 600 413 L 600 387 L 740 387 L 740 413"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 600 413 L 600 621 L 740 621 L 740 413"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 600 413 L 600 621 L 740 621 L 740 413"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 600 413 L 740 413"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 600 413 L 740 413"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 138,
                                            height: 1,
                                            paddingTop: 400,
                                            marginLeft: 601
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                SelectedComponents
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={605}
                                y={392}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={600}
                                y={413}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={600}
                                y={413}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 130,
                                            height: 1,
                                            paddingTop: 420,
                                            marginLeft: 606
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + motherboard
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={600}
                                y={439}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={600}
                                y={439}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 130,
                                            height: 1,
                                            paddingTop: 446,
                                            marginLeft: 606
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + case
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={600}
                                y={465}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={600}
                                y={465}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 130,
                                            height: 1,
                                            paddingTop: 472,
                                            marginLeft: 606
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + cpu
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={600}
                                y={491}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={600}
                                y={491}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 130,
                                            height: 1,
                                            paddingTop: 498,
                                            marginLeft: 606
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + cpuCooler
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={600}
                                y={517}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={600}
                                y={517}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 130,
                                            height: 1,
                                            paddingTop: 524,
                                            marginLeft: 606
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + gpu
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={600}
                                y={543}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={600}
                                y={543}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 130,
                                            height: 1,
                                            paddingTop: 550,
                                            marginLeft: 606
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + ram
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={600}
                                y={569}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={600}
                                y={569}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 130,
                                            height: 1,
                                            paddingTop: 576,
                                            marginLeft: 606
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + powerUnit
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={600}
                                y={595}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={600}
                                y={595}
                                width={140}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 130,
                                            height: 1,
                                            paddingTop: 602,
                                            marginLeft: 606
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                + storage
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 467 826 L 467 800 L 707 800 L 707 826"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 467 826 L 467 1066 L 707 1066 L 707 826"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 467 826 L 467 1066 L 707 1066 L 707 826"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 467 826 L 707 826"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 467 826 L 707 826"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 238,
                                            height: 1,
                                            paddingTop: 807,
                                            marginLeft: 468
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                ComponentSelectorImpl
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={472}
                                y={805}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={467}
                                y={826}
                                width={240}
                                height={24}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={467}
                                y={826}
                                width={240}
                                height={24}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 230,
                                            height: 1,
                                            paddingTop: 833,
                                            marginLeft: 473
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 20,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                - motherboard :CompatibilityComponent
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={467}
                                y={850}
                                width={240}
                                height={20}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={467}
                                y={850}
                                width={240}
                                height={20}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 230,
                                            height: 1,
                                            paddingTop: 857,
                                            marginLeft: 473
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 16,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                -gpu : CompatibilityComponent
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={467}
                                y={870}
                                width={240}
                                height={20}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={467}
                                y={870}
                                width={240}
                                height={20}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 230,
                                            height: 1,
                                            paddingTop: 877,
                                            marginLeft: 473
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 16,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                - collections : ComponentCollections
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 467 894 L 707 894"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 467 894 L 707 894"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={467}
                                y={898}
                                width={240}
                                height={22}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={467}
                                y={898}
                                width={240}
                                height={22}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 230,
                                            height: 1,
                                            paddingTop: 905,
                                            marginLeft: 473
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 18,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                - selectMotherboard : MotherboardEntity
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={467}
                                y={920}
                                width={240}
                                height={20}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={467}
                                y={920}
                                width={240}
                                height={20}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 230,
                                            height: 1,
                                            paddingTop: 927,
                                            marginLeft: 473
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 16,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                - selectCase : CaseEntity
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={467}
                                y={940}
                                width={240}
                                height={20}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={467}
                                y={940}
                                width={240}
                                height={20}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 230,
                                            height: 1,
                                            paddingTop: 947,
                                            marginLeft: 473
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 16,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                - selectCpu : CpuEntity
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={467}
                                y={960}
                                width={240}
                                height={20}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={467}
                                y={960}
                                width={240}
                                height={20}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 230,
                                            height: 1,
                                            paddingTop: 967,
                                            marginLeft: 473
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 16,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                - selectGpu : GpuEntity
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={467}
                                y={980}
                                width={240}
                                height={20}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={467}
                                y={980}
                                width={240}
                                height={20}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 230,
                                            height: 1,
                                            paddingTop: 987,
                                            marginLeft: 473
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 16,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                - selectCpuCooler : CpuCoolerEntity
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={467}
                                y={1000}
                                width={240}
                                height={20}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={467}
                                y={1000}
                                width={240}
                                height={20}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 230,
                                            height: 1,
                                            paddingTop: 1007,
                                            marginLeft: 473
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 16,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                - selectRam: RamEntity
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={467}
                                y={1020}
                                width={240}
                                height={20}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={467}
                                y={1020}
                                width={240}
                                height={20}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 230,
                                            height: 1,
                                            paddingTop: 1027,
                                            marginLeft: 473
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 16,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                - selectStorage : StorageEntity
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={467}
                                y={1040}
                                width={240}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={467}
                                y={1040}
                                width={240}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 230,
                                            height: 1,
                                            paddingTop: 1047,
                                            marginLeft: 473
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                - selectPowerUnit : PowerUnitEntity
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1080 36 L 1080 10 L 1270 10 L 1270 36"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 1080 36 L 1080 270 L 1270 270 L 1270 36"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1080 36 L 1080 270 L 1270 270 L 1270 36"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 1080 36 L 1270 36"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1080 36 L 1270 36"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                fontStyle="italic"
                                textAnchor="middle"
                                fontSize="12px"
                            >
                                <text x={1175} y={28}>
                                    CartController
                                </text>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={1085}
                                y={15}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1080}
                                y={36}
                                width={190}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1080}
                                y={36}
                                width={190}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1084-41-182-26-0">
                                <rect x={1084} y={41} width={182} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1084-41-182-26-0)"
                                fontSize="12px"
                            >
                                <text x={1086} y={54}>
                                    -ShoppingCartFacade
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1080}
                                y={62}
                                width={190}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1080}
                                y={62}
                                width={190}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1084-67-182-26-0">
                                <rect x={1084} y={67} width={182} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1084-67-182-26-0)"
                                fontSize="12px"
                            >
                                <text x={1086} y={80}>
                                    -SimpleCookieFactory
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1080}
                                y={88}
                                width={190}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1080}
                                y={88}
                                width={190}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1084-93-182-26-0">
                                <rect x={1084} y={93} width={182} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1084-93-182-26-0)"
                                fontSize="12px"
                            >
                                <text x={1086} y={106}>
                                    -COOKIE_NAME
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1080 118 L 1270 118"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1080 118 L 1270 118"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1080}
                                y={122}
                                width={190}
                                height={28}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1080}
                                y={122}
                                width={190}
                                height={28}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1084-127-182-28-0">
                                <rect x={1084} y={127} width={182} height={28} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1084-127-182-28-0)"
                                fontSize="11px"
                            >
                                <text x={1086} y={139}>
                                    +addProduct
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1080}
                                y={150}
                                width={190}
                                height={28}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1080}
                                y={150}
                                width={190}
                                height={28}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1084-155-182-28-0">
                                <rect x={1084} y={155} width={182} height={28} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1084-155-182-28-0)"
                                fontSize="11px"
                            >
                                <text x={1086} y={167}>
                                    +remove
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1080}
                                y={178}
                                width={190}
                                height={28}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1080}
                                y={178}
                                width={190}
                                height={28}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1084-183-182-28-0">
                                <rect x={1084} y={183} width={182} height={28} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1084-183-182-28-0)"
                                fontSize="11px"
                            >
                                <text x={1086} y={195}>
                                    +view : ResponseEntity&lt;Object&gt;
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1080}
                                y={206}
                                width={190}
                                height={28}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1080}
                                y={206}
                                width={190}
                                height={28}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1084-211-182-28-0">
                                <rect x={1084} y={211} width={182} height={28} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1084-211-182-28-0)"
                                fontSize="11px"
                            >
                                <text x={1086} y={223}>
                                    +get-size : int
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1080}
                                y={234}
                                width={190}
                                height={28}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1080}
                                y={234}
                                width={190}
                                height={28}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1084-239-182-28-0">
                                <rect x={1084} y={239} width={182} height={28} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1084-239-182-28-0)"
                                fontSize="11px"
                            >
                                <text x={1086} y={251}>
                                    +clear
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1680 46 L 1680 20 L 1870 20 L 1870 46"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 1680 46 L 1680 200 L 1870 200 L 1870 46"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1680 46 L 1680 200 L 1870 200 L 1870 46"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 1680 46 L 1870 46"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1680 46 L 1870 46"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                fontStyle="italic"
                                textAnchor="middle"
                                fontSize="12px"
                            >
                                <text x={1775} y={38}>
                                    UserController
                                </text>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={1685}
                                y={25}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1680}
                                y={46}
                                width={190}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1680}
                                y={46}
                                width={190}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1684-51-182-26-0">
                                <rect x={1684} y={51} width={182} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1684-51-182-26-0)"
                                fontSize="12px"
                            >
                                <text x={1686} y={64}>
                                    -RegistrationService
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1680}
                                y={72}
                                width={190}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1680}
                                y={72}
                                width={190}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1684-77-182-26-0">
                                <rect x={1684} y={77} width={182} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1684-77-182-26-0)"
                                fontSize="12px"
                            >
                                <text x={1686} y={90}>
                                    -LoginService
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1680 102 L 1870 102"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1680 102 L 1870 102"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1680}
                                y={106}
                                width={190}
                                height={28}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1680}
                                y={106}
                                width={190}
                                height={28}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1684-111-182-28-0">
                                <rect x={1684} y={111} width={182} height={28} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1684-111-182-28-0)"
                                fontSize="11px"
                            >
                                <text x={1686} y={123}>
                                    +register : AuthenticationResponse
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1680}
                                y={134}
                                width={190}
                                height={28}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1680}
                                y={134}
                                width={190}
                                height={28}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1684-139-182-28-0">
                                <rect x={1684} y={139} width={182} height={28} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1684-139-182-28-0)"
                                fontSize="11px"
                            >
                                <text x={1686} y={151}>
                                    +login : AuthenticationResponse
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1680}
                                y={162}
                                width={190}
                                height={28}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1680}
                                y={162}
                                width={190}
                                height={28}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1684-167-182-28-0">
                                <rect x={1684} y={167} width={182} height={28} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1684-167-182-28-0)"
                                fontSize="11px"
                            >
                                <text x={1686} y={179}>
                                    +checkStatus : String
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1290 672.5 L 1290 646.5 L 1480 646.5 L 1480 672.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 1290 672.5 L 1290 824.5 L 1480 824.5 L 1480 672.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1290 672.5 L 1290 824.5 L 1480 824.5 L 1480 672.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 1290 672.5 L 1480 672.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1290 672.5 L 1480 672.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                fontStyle="italic"
                                textAnchor="middle"
                                fontSize="12px"
                            >
                                <text x={1385} y="664.5">
                                    ShoppingCartFacadeImpl
                                </text>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={1295}
                                y={651}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1290}
                                y="672.5"
                                width={190}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1290}
                                y="672.5"
                                width={190}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1294-678-182-26-0">
                                <rect x={1294} y={678} width={182} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1294-678-182-26-0)"
                                fontSize="12px"
                            >
                                <text x={1296} y="690.5">
                                    -CartLoggedOfffService
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1290}
                                y="698.5"
                                width={190}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1290}
                                y="698.5"
                                width={190}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1294-704-182-26-0">
                                <rect x={1294} y={704} width={182} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1294-704-182-26-0)"
                                fontSize="12px"
                            >
                                <text x={1296} y="716.5">
                                    -CartLoggedInService
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1290}
                                y="724.5"
                                width={190}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1290}
                                y="724.5"
                                width={190}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1294-730-182-26-0">
                                <rect x={1294} y={730} width={182} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1294-730-182-26-0)"
                                fontSize="12px"
                            >
                                <text x={1296} y="742.5">
                                    -ShoppingCart
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1290}
                                y="750.5"
                                width={190}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1290}
                                y="750.5"
                                width={190}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1294-756-182-26-0">
                                <rect x={1294} y={756} width={182} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1294-756-182-26-0)"
                                fontSize="12px"
                            >
                                <text x={1296} y="768.5">
                                    -Subject subject
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1100 376 L 1100 336 L 1250 336 L 1250 376"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 1100 376 L 1100 506 L 1250 506 L 1250 376"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1100 376 L 1100 506 L 1250 506 L 1250 376"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 1100 376 L 1250 376"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1100 376 L 1250 376"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 148,
                                            height: 1,
                                            paddingTop: 343,
                                            marginLeft: 1101
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                &lt;&lt;Interface&gt;&gt;
                                                <br />
                                                ShoppingCart
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={1105}
                                y={341}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1100}
                                y={376}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1100}
                                y={376}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 140,
                                            height: 1,
                                            paddingTop: 383,
                                            marginLeft: 1106
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 10,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +addItem
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1100}
                                y={402}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1100}
                                y={402}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 140,
                                            height: 1,
                                            paddingTop: 409,
                                            marginLeft: 1106
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 10,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +removeItem
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1100}
                                y={428}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1100}
                                y={428}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 140,
                                            height: 1,
                                            paddingTop: 435,
                                            marginLeft: 1106
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 10,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +clear
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1100}
                                y={454}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1100}
                                y={454}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 140,
                                            height: 1,
                                            paddingTop: 461,
                                            marginLeft: 1106
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 10,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +view : List&lt;Computer&gt;
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1100}
                                y={480}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1100}
                                y={480}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 140,
                                            height: 1,
                                            paddingTop: 487,
                                            marginLeft: 1106
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 10,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +getSize : int
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1370 361.5 L 1370 321.5 L 1520 321.5 L 1520 361.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 1370 361.5 L 1370 439.5 L 1520 439.5 L 1520 361.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1370 361.5 L 1370 439.5 L 1520 439.5 L 1520 361.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 1370 361.5 L 1520 361.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1370 361.5 L 1520 361.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 148,
                                            height: 1,
                                            paddingTop: 329,
                                            marginLeft: 1371
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                &lt;&lt;Interface&gt;&gt;
                                                <br />
                                                Subject
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={1375}
                                y={326}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1370}
                                y="361.5"
                                width={150}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1370}
                                y="361.5"
                                width={150}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 140,
                                            height: 1,
                                            paddingTop: 369,
                                            marginLeft: 1376
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 10,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +subscribe
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1370}
                                y="387.5"
                                width={150}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1370}
                                y="387.5"
                                width={150}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 140,
                                            height: 1,
                                            paddingTop: 395,
                                            marginLeft: 1376
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 10,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +unsubscribe
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1370}
                                y="413.5"
                                width={150}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1370}
                                y="413.5"
                                width={150}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 140,
                                            height: 1,
                                            paddingTop: 421,
                                            marginLeft: 1376
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 10,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +notifySubscribers
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 860 566 L 860 540 L 1050 540 L 1050 566"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 860 566 L 860 630 L 1050 630 L 1050 566"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 860 566 L 860 630 L 1050 630 L 1050 566"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 860 566 L 1050 566"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 860 566 L 1050 566"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                fontStyle="italic"
                                textAnchor="middle"
                                fontSize="12px"
                            >
                                <text x={955} y={558}>
                                    CartLoggedOffService
                                </text>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={865}
                                y={545}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={860}
                                y={566}
                                width={190}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={860}
                                y={566}
                                width={190}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-864-571-182-26-0">
                                <rect x={864} y={571} width={182} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-864-571-182-26-0)"
                                fontSize="12px"
                            >
                                <text x={866} y={584}>
                                    -ComponentService
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={860}
                                y={592}
                                width={190}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={860}
                                y={592}
                                width={190}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-864-597-182-26-0">
                                <rect x={864} y={597} width={182} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-864-597-182-26-0)"
                                fontSize="12px"
                            >
                                <text x={866} y={610}>
                                    -CartItemRepository
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1080 596.5 L 1080 570.5 L 1270 570.5 L 1270 596.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 1080 596.5 L 1080 680.5 L 1270 680.5 L 1270 596.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1080 596.5 L 1080 680.5 L 1270 680.5 L 1270 596.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 1080 596.5 L 1270 596.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1080 596.5 L 1270 596.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                fontStyle="italic"
                                textAnchor="middle"
                                fontSize="12px"
                            >
                                <text x={1175} y="588.5">
                                    CartLoggedInfService
                                </text>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={1085}
                                y={575}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1080}
                                y="596.5"
                                width={190}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1080}
                                y="596.5"
                                width={190}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1084-602-182-26-0">
                                <rect x={1084} y={602} width={182} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1084-602-182-26-0)"
                                fontSize="12px"
                            >
                                <text x={1086} y="614.5">
                                    -ComponentService
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1080}
                                y="622.5"
                                width={190}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1080}
                                y="622.5"
                                width={190}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1084-628-182-26-0">
                                <rect x={1084} y={628} width={182} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1084-628-182-26-0)"
                                fontSize="12px"
                            >
                                <text x={1086} y="640.5">
                                    -CartItemRepository
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1080}
                                y="648.5"
                                width={190}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1080}
                                y="648.5"
                                width={190}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1084-654-182-26-0">
                                <rect x={1084} y={654} width={182} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1084-654-182-26-0)"
                                fontSize="12px"
                            >
                                <text x={1086} y="666.5">
                                    -JWTService
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1310 530.5 L 1310 490.5 L 1460 490.5 L 1460 530.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 1310 530.5 L 1310 556.5 L 1460 556.5 L 1460 530.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1310 530.5 L 1310 556.5 L 1460 556.5 L 1460 530.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 1310 530.5 L 1460 530.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1310 530.5 L 1460 530.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 148,
                                            height: 1,
                                            paddingTop: 498,
                                            marginLeft: 1311
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                &lt;&lt;Interface&gt;&gt;
                                                <br />
                                                ShoppingCartFacade
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={1315}
                                y={495}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 880 727 L 880 687 L 1030 687 L 1030 727"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 880 727 L 880 779 L 1030 779 L 1030 727"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 880 727 L 880 779 L 1030 779 L 1030 727"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 880 727 L 1030 727"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 880 727 L 1030 727"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 148,
                                            height: 1,
                                            paddingTop: 694,
                                            marginLeft: 881
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                &lt;&lt;Interface&gt;&gt;
                                                <br />
                                                CartItemRepository
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={885}
                                y={692}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={880}
                                y={727}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={880}
                                y={727}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 140,
                                            height: 1,
                                            paddingTop: 734,
                                            marginLeft: 886
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 10,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +findAllByToken : List&lt;CartItemEntity&gt;
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={880}
                                y={753}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={880}
                                y={753}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 140,
                                            height: 1,
                                            paddingTop: 760,
                                            marginLeft: 886
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 10,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +deleteAllByToken
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1610 625 L 1610 585 L 1760 585 L 1760 625"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 1610 625 L 1610 703 L 1760 703 L 1760 625"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1610 625 L 1610 703 L 1760 703 L 1760 625"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 1610 625 L 1760 625"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1610 625 L 1760 625"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 148,
                                            height: 1,
                                            paddingTop: 592,
                                            marginLeft: 1611
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                &lt;&lt;Interface&gt;&gt;
                                                <br />
                                                UserRepository
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={1615}
                                y={590}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1610}
                                y={625}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1610}
                                y={625}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 140,
                                            height: 1,
                                            paddingTop: 632,
                                            marginLeft: 1616
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 10,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +loadByUsername : UserDetails
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1610}
                                y={651}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1610}
                                y={651}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 140,
                                            height: 1,
                                            paddingTop: 658,
                                            marginLeft: 1616
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 10,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +signUpUser : AppUser
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1610}
                                y={677}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1610}
                                y={677}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 140,
                                            height: 1,
                                            paddingTop: 684,
                                            marginLeft: 1616
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 10,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +enablelAppUser : int
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1644 384 L 1644 358 L 1870 358 L 1870 384"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 1644 384 L 1644 508 L 1870 508 L 1870 384"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1644 384 L 1644 508 L 1870 508 L 1870 384"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 1644 384 L 1870 384"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1644 384 L 1870 384"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                fontStyle="italic"
                                textAnchor="middle"
                                fontSize="12px"
                            >
                                <text x={1757} y={376}>
                                    RegistrationService
                                </text>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={1649}
                                y={363}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1644}
                                y={384}
                                width={226}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1644}
                                y={384}
                                width={226}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1648-389-218-26-0">
                                <rect x={1648} y={389} width={218} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1648-389-218-26-0)"
                                fontSize="12px"
                            >
                                <text x={1650} y={402}>
                                    -EmailValidator
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1644}
                                y={410}
                                width={226}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1644}
                                y={410}
                                width={226}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1648-415-218-26-0">
                                <rect x={1648} y={415} width={218} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1648-415-218-26-0)"
                                fontSize="12px"
                            >
                                <text x={1650} y={428}>
                                    -UserService
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1644}
                                y={436}
                                width={226}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1644}
                                y={436}
                                width={226}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1648-441-218-26-0">
                                <rect x={1648} y={441} width={218} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1648-441-218-26-0)"
                                fontSize="12px"
                            >
                                <text x={1650} y={454}>
                                    -JwtService
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1644 462 L 1644 462 L 1870 462 L 1870 462"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 1644 462 L 1644 508 L 1870 508 L 1870 462"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1644 462 L 1644 508 L 1870 508 L 1870 462"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={1649}
                                y={467}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1644}
                                y={473}
                                width={220}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1644}
                                y={473}
                                width={220}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1648-478-212-26-0">
                                <rect x={1648} y={478} width={212} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1648-478-212-26-0)"
                                fontSize="12px"
                            >
                                <text x={1650} y={491}>
                                    + register : AuthenticationResponse
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1890 382 L 1890 356 L 2116 356 L 2116 382"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 1890 382 L 1890 506 L 2116 506 L 2116 382"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1890 382 L 1890 506 L 2116 506 L 2116 382"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 1890 382 L 2116 382"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1890 382 L 2116 382"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                fontStyle="italic"
                                textAnchor="middle"
                                fontSize="12px"
                            >
                                <text x={2003} y={374}>
                                    LoginService
                                </text>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={1895}
                                y={361}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1890}
                                y={382}
                                width={226}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1890}
                                y={382}
                                width={226}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1894-387-218-26-0">
                                <rect x={1894} y={387} width={218} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1894-387-218-26-0)"
                                fontSize="12px"
                            >
                                <text x={1896} y={400}>
                                    -UserService
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1890}
                                y={408}
                                width={226}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1890}
                                y={408}
                                width={226}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1894-413-218-26-0">
                                <rect x={1894} y={413} width={218} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1894-413-218-26-0)"
                                fontSize="12px"
                            >
                                <text x={1896} y={426}>
                                    -AuthenticationManager
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1890}
                                y={434}
                                width={226}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1890}
                                y={434}
                                width={226}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1894-439-218-26-0">
                                <rect x={1894} y={439} width={218} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1894-439-218-26-0)"
                                fontSize="12px"
                            >
                                <text x={1896} y={452}>
                                    -JwtService
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1890 460 L 1890 460 L 2116 460 L 2116 460"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 1890 460 L 1890 506 L 2116 506 L 2116 460"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1890 460 L 1890 506 L 2116 506 L 2116 460"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={1895}
                                y={465}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1890}
                                y={471}
                                width={220}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1890}
                                y={471}
                                width={220}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1894-476-212-26-0">
                                <rect x={1894} y={476} width={212} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1894-476-212-26-0)"
                                fontSize="12px"
                            >
                                <text x={1896} y={489}>
                                    + login : AuthenticationResponse
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 2010 206 L 2010 180 L 2236 180 L 2236 206"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 2010 206 L 2010 232 L 2236 232 L 2236 206"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2010 206 L 2010 232 L 2236 232 L 2236 206"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 2010 206 L 2236 206"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2010 206 L 2236 206"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                fontStyle="italic"
                                textAnchor="middle"
                                fontSize="12px"
                            >
                                <text x={2123} y={198}>
                                    EmailValidator
                                </text>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={2015}
                                y={185}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2010}
                                y={206}
                                width={226}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2010}
                                y={206}
                                width={226}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2014-211-218-26-0">
                                <rect x={2014} y={211} width={218} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2014-211-218-26-0)"
                                fontSize="12px"
                            >
                                <text x={2016} y={224}>
                                    +validate : boolean
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1770 756 L 1770 730 L 2030 730 L 2030 756"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 1770 756 L 1770 1010 L 2030 1010 L 2030 756"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1770 756 L 1770 1010 L 2030 1010 L 2030 756"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 1770 756 L 2030 756"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1770 756 L 2030 756"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                fontStyle="italic"
                                textAnchor="middle"
                                fontSize="12px"
                            >
                                <text x={1900} y={748}>
                                    JwtService
                                </text>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={1775}
                                y={735}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1770}
                                y={756}
                                width={260}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1770}
                                y={756}
                                width={260}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1774-761-252-26-0">
                                <rect x={1774} y={761} width={252} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1774-761-252-26-0)"
                                fontSize="12px"
                            >
                                <text x={1776} y={774}>
                                    -String secretKey
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1770 782 L 1770 782 L 2030 782 L 2030 782"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 1770 782 L 1770 1010 L 2030 1010 L 2030 782"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1770 782 L 1770 1010 L 2030 1010 L 2030 782"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={1775}
                                y={787}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1770}
                                y={793}
                                width={220}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1770}
                                y={793}
                                width={220}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1774-798-212-26-0">
                                <rect x={1774} y={798} width={212} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1774-798-212-26-0)"
                                fontSize="12px"
                            >
                                <text x={1776} y={811}>
                                    + extractUsername : String
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1770}
                                y={819}
                                width={220}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1770}
                                y={819}
                                width={220}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1774-824-212-26-0">
                                <rect x={1774} y={824} width={212} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1774-824-212-26-0)"
                                fontSize="12px"
                            >
                                <text x={1776} y={837}>
                                    + extractClaims : T
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1770}
                                y={845}
                                width={220}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1770}
                                y={845}
                                width={220}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1774-850-212-26-0">
                                <rect x={1774} y={850} width={212} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1774-850-212-26-0)"
                                fontSize="12px"
                            >
                                <text x={1776} y={863}>
                                    - extractAllClaims : Claims
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1770}
                                y={871}
                                width={220}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1770}
                                y={871}
                                width={220}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1774-876-212-26-0">
                                <rect x={1774} y={876} width={212} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1774-876-212-26-0)"
                                fontSize="12px"
                            >
                                <text x={1776} y={889}>
                                    - getSigningKey : Key
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1770}
                                y={897}
                                width={220}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1770}
                                y={897}
                                width={220}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1774-902-212-26-0">
                                <rect x={1774} y={902} width={212} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1774-902-212-26-0)"
                                fontSize="12px"
                            >
                                <text x={1776} y={915}>
                                    + generateToken : String
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1770}
                                y={923}
                                width={220}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1770}
                                y={923}
                                width={220}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1774-928-212-26-0">
                                <rect x={1774} y={928} width={212} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1774-928-212-26-0)"
                                fontSize="12px"
                            >
                                <text x={1776} y={941}>
                                    + isTokenValid : boolean
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1770}
                                y={949}
                                width={220}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1770}
                                y={949}
                                width={220}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1774-954-212-26-0">
                                <rect x={1774} y={954} width={212} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1774-954-212-26-0)"
                                fontSize="12px"
                            >
                                <text x={1776} y={967}>
                                    + isTokenExpired : boolean
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={1770}
                                y={975}
                                width={220}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={1770}
                                y={975}
                                width={220}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-1774-980-212-26-0">
                                <rect x={1774} y={980} width={212} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-1774-980-212-26-0)"
                                fontSize="12px"
                            >
                                <text x={1776} y={993}>
                                    - extractExpiration : Date
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 2110 706.5 L 2110 680.5 L 2336 680.5 L 2336 706.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 2110 706.5 L 2110 804.5 L 2336 804.5 L 2336 706.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2110 706.5 L 2110 804.5 L 2336 804.5 L 2336 706.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 2110 706.5 L 2336 706.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2110 706.5 L 2336 706.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                fontStyle="italic"
                                textAnchor="middle"
                                fontSize="12px"
                            >
                                <text x={2223} y="698.5">
                                    JwtAuthFilter
                                </text>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={2115}
                                y={685}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2110}
                                y="706.5"
                                width={226}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2110}
                                y="706.5"
                                width={226}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2114-712-218-26-0">
                                <rect x={2114} y={712} width={218} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2114-712-218-26-0)"
                                fontSize="12px"
                            >
                                <text x={2116} y="724.5">
                                    -UserDetailsService
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2110}
                                y="732.5"
                                width={226}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2110}
                                y="732.5"
                                width={226}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2114-738-218-26-0">
                                <rect x={2114} y={738} width={218} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2114-738-218-26-0)"
                                fontSize="12px"
                            >
                                <text x={2116} y="750.5">
                                    -JwtService
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 2110 758.5 L 2110 758.5 L 2336 758.5 L 2336 758.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 2110 758.5 L 2110 804.5 L 2336 804.5 L 2336 758.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2110 758.5 L 2110 804.5 L 2336 804.5 L 2336 758.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={2115}
                                y={763}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2110}
                                y="769.5"
                                width={220}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2110}
                                y="769.5"
                                width={220}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2114-775-212-26-0">
                                <rect x={2114} y={775} width={212} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2114-775-212-26-0)"
                                fontSize="12px"
                            >
                                <text x={2116} y="787.5">
                                    + doFilterInternal
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 2290 464.5 L 2290 438.5 L 2545 438.5 L 2545 464.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 2290 464.5 L 2290 608.5 L 2545 608.5 L 2545 464.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2290 464.5 L 2290 608.5 L 2545 608.5 L 2545 464.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 2290 464.5 L 2545 464.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2290 464.5 L 2545 464.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                fontStyle="italic"
                                textAnchor="middle"
                                fontSize="12px"
                            >
                                <text x="2417.5" y="456.5">
                                    WebSecurityConfig
                                </text>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={2295}
                                y={443}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2290}
                                y="464.5"
                                width={255}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2290}
                                y="464.5"
                                width={255}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2294-470-247-26-0">
                                <rect x={2294} y={470} width={247} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2294-470-247-26-0)"
                                fontSize="12px"
                            >
                                <text x={2296} y="482.5">
                                    -JwtAthFilter
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2290}
                                y="490.5"
                                width={255}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2290}
                                y="490.5"
                                width={255}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2294-496-247-26-0">
                                <rect x={2294} y={496} width={247} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2294-496-247-26-0)"
                                fontSize="12px"
                            >
                                <text x={2296} y="508.5">
                                    -AuthenticationProvider
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 2290 516.5 L 2290 516.5 L 2545 516.5 L 2545 516.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 2290 516.5 L 2290 608.5 L 2545 608.5 L 2545 516.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2290 516.5 L 2290 608.5 L 2545 608.5 L 2545 516.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={2295}
                                y={521}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2290}
                                y="527.5"
                                width={220}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2290}
                                y="527.5"
                                width={220}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2294-533-212-26-0">
                                <rect x={2294} y={533} width={212} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2294-533-212-26-0)"
                                fontSize="12px"
                            >
                                <text x={2296} y="545.5">
                                    +filterChain : SecurityFilterChain
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2290}
                                y="553.5"
                                width={250}
                                height={53}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2290}
                                y="553.5"
                                width={250}
                                height={53}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2294-559-242-53-0">
                                <rect x={2294} y={559} width={242} height={53} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2294-559-242-53-0)"
                                fontSize="12px"
                            >
                                <text x={2296} y="571.5">
                                    + corsConfigurationSource{" "}
                                </text>
                                <text x={2296} y="585.5">
                                    : CorsConfigurationSource
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 2450 706.5 L 2450 680.5 L 2705 680.5 L 2705 706.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 2450 706.5 L 2450 850.5 L 2705 850.5 L 2705 706.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2450 706.5 L 2450 850.5 L 2705 850.5 L 2705 706.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 2450 706.5 L 2705 706.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2450 706.5 L 2705 706.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                fontStyle="italic"
                                textAnchor="middle"
                                fontSize="12px"
                            >
                                <text x="2577.5" y="698.5">
                                    AuthProviderConfig
                                </text>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={2455}
                                y={685}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2450}
                                y="706.5"
                                width={255}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2450}
                                y="706.5"
                                width={255}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2454-712-247-26-0">
                                <rect x={2454} y={712} width={247} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2454-712-247-26-0)"
                                fontSize="12px"
                            >
                                <text x={2456} y="724.5">
                                    -UserDetailsService
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2450}
                                y="732.5"
                                width={255}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2450}
                                y="732.5"
                                width={255}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2454-738-247-26-0">
                                <rect x={2454} y={738} width={247} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2454-738-247-26-0)"
                                fontSize="12px"
                            >
                                <text x={2456} y="750.5">
                                    -PasswordEncoder
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 2450 758.5 L 2450 758.5 L 2705 758.5 L 2705 758.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 2450 758.5 L 2450 850.5 L 2705 850.5 L 2705 758.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2450 758.5 L 2450 850.5 L 2705 850.5 L 2705 758.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={2455}
                                y={763}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2450}
                                y="769.5"
                                width={220}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2450}
                                y="769.5"
                                width={220}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2454-775-212-26-0">
                                <rect x={2454} y={775} width={212} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2454-775-212-26-0)"
                                fontSize="12px"
                            >
                                <text x={2456} y="787.5">
                                    +authenticatioinManager{" "}
                                </text>
                                <text x={2456} y="801.5">
                                    : AuthenticationManager
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2450}
                                y="808.5"
                                width={250}
                                height={40}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2450}
                                y="808.5"
                                width={250}
                                height={40}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2454-814-242-40-0">
                                <rect x={2454} y={814} width={242} height={40} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2454-814-242-40-0)"
                                fontSize="12px"
                            >
                                <text x={2456} y="826.5">
                                    +authenticationProvider{" "}
                                </text>
                                <text x={2456} y="840.5">
                                    : AuthenticationProvider
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 2630 523 L 2630 497 L 2856 497 L 2856 523"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 2630 523 L 2630 550 L 2856 550 L 2856 523"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2630 523 L 2630 550 L 2856 550 L 2856 523"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 2630 523 L 2856 523"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2630 523 L 2856 523"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                fontStyle="italic"
                                textAnchor="middle"
                                fontSize="12px"
                            >
                                <text x={2743} y={515}>
                                    PasswordEncoderConfig
                                </text>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={2635}
                                y={502}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2630}
                                y={523}
                                width={226}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2630}
                                y={523}
                                width={226}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2634-528-218-26-0">
                                <rect x={2634} y={528} width={218} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2634-528-218-26-0)"
                                fontSize="12px"
                            >
                                <text x={2636} y={541}>
                                    + passwordEncoder : PasswordEncoder
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 2990 196 L 2990 170 L 3295 170 L 3295 196"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 2990 196 L 2990 620 L 3295 620 L 3295 196"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2990 196 L 2990 620 L 3295 620 L 3295 196"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 2990 196 L 3295 196"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2990 196 L 3295 196"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                fontStyle="italic"
                                textAnchor="middle"
                                fontSize="12px"
                            >
                                <text x="3142.5" y={188}>
                                    SeleniunScraper
                                </text>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={2995}
                                y={175}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2990}
                                y={196}
                                width={305}
                                height={40}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2990}
                                y={196}
                                width={305}
                                height={40}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2994-201-297-40-0">
                                <rect x={2994} y={201} width={297} height={40} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2994-201-297-40-0)"
                                fontSize="12px"
                            >
                                <text x={2996} y={214}>
                                    -scrapedProducts :
                                </text>
                                <text x={2996} y={228}>
                                    &nbsp;HashMap&lt;String,HashMap&lt;String,Object&gt;&gt;
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2990}
                                y={236}
                                width={305}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2990}
                                y={236}
                                width={305}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2994-241-297-26-0">
                                <rect x={2994} y={241} width={297} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2994-241-297-26-0)"
                                fontSize="12px"
                            >
                                <text x={2996} y={254}>
                                    -driver : WebDriver
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2990}
                                y={262}
                                width={305}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2990}
                                y={262}
                                width={305}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2994-267-297-26-0">
                                <rect x={2994} y={267} width={297} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2994-267-297-26-0)"
                                fontSize="12px"
                            >
                                <text x={2996} y={280}>
                                    -compatibleIds : ArrayList
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2990}
                                y={288}
                                width={305}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2990}
                                y={288}
                                width={305}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2994-293-297-26-0">
                                <rect x={2994} y={293} width={297} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2994-293-297-26-0)"
                                fontSize="12px"
                            >
                                <text x={2996} y={306}>
                                    -BASE_URL : String
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2990}
                                y={314}
                                width={305}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2990}
                                y={314}
                                width={305}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2994-319-297-26-0">
                                <rect x={2994} y={319} width={297} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2994-319-297-26-0)"
                                fontSize="12px"
                            >
                                <text x={2996} y={332}>
                                    -id : long
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 2990 340 L 2990 340 L 3295 340 L 3295 340"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 2990 340 L 2990 620 L 3295 620 L 3295 340"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2990 340 L 2990 620 L 3295 620 L 3295 340"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={2995}
                                y={345}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2990}
                                y={390}
                                width={250}
                                height={40}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2990}
                                y={390}
                                width={250}
                                height={40}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2994-395-242-40-0">
                                <rect x={2994} y={395} width={242} height={40} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2994-395-242-40-0)"
                                fontSize="12px"
                            >
                                <text x={2996} y={408}>
                                    +scrapePrices : List&lt;Double&gt;
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2990}
                                y={350}
                                width={250}
                                height={40}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2990}
                                y={350}
                                width={250}
                                height={40}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2994-355-242-40-0">
                                <rect x={2994} y={355} width={242} height={40} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2994-355-242-40-0)"
                                fontSize="12px"
                            >
                                <text x={2996} y={368}>
                                    +createProductMap{" "}
                                </text>
                                <text x={2996} y={382}>
                                    : HashMap&lt;String,HashMap&lt;String,Object&gt;&gt;
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2990}
                                y={420}
                                width={255}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2990}
                                y={420}
                                width={255}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2994-425-247-26-0">
                                <rect x={2994} y={425} width={247} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2994-425-247-26-0)"
                                fontSize="12px"
                            >
                                <text x={2996} y={438}>
                                    -scrapeProductLinks : List&lt;WebElement&gt;
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2990}
                                y={450}
                                width={255}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2990}
                                y={450}
                                width={255}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2994-455-247-26-0">
                                <rect x={2994} y={455} width={247} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2994-455-247-26-0)"
                                fontSize="12px"
                            >
                                <text x={2996} y={468}>
                                    -scrapeProduct : HashMap&lt;String,Object&gt;
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2990}
                                y={476}
                                width={255}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2990}
                                y={476}
                                width={255}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2994-481-247-26-0">
                                <rect x={2994} y={481} width={247} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2994-481-247-26-0)"
                                fontSize="12px"
                            >
                                <text x={2996} y={494}>
                                    -getVariantMap : HashMap&lt;String,List&lt;String&gt;&gt;
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2990}
                                y={502}
                                width={255}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2990}
                                y={502}
                                width={255}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2994-507-247-26-0">
                                <rect x={2994} y={507} width={247} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2994-507-247-26-0)"
                                fontSize="12px"
                            >
                                <text x={2996} y={520}>
                                    -getElementRecursice
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2990}
                                y={528}
                                width={255}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2990}
                                y={528}
                                width={255}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2994-533-247-26-0">
                                <rect x={2994} y={533} width={247} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2994-533-247-26-0)"
                                fontSize="12px"
                            >
                                <text x={2996} y={546}>
                                    -getLinkByText : String
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2990}
                                y={559}
                                width={255}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2990}
                                y={559}
                                width={255}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2994-564-247-26-0">
                                <rect x={2994} y={564} width={247} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2994-564-247-26-0)"
                                fontSize="12px"
                            >
                                <text x={2996} y={577}>
                                    +compatibleProductsSuperviser
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={2990}
                                y={590}
                                width={255}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={2990}
                                y={590}
                                width={255}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-2994-595-247-26-0">
                                <rect x={2994} y={595} width={247} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-2994-595-247-26-0)"
                                fontSize="12px"
                            >
                                <text x={2996} y={608}>
                                    -wait
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 3015 705.5 L 3015 679.5 L 3270 679.5 L 3270 705.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 3015 705.5 L 3015 861.5 L 3270 861.5 L 3270 705.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 3015 705.5 L 3015 861.5 L 3270 861.5 L 3270 705.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 3015 705.5 L 3270 705.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 3015 705.5 L 3270 705.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                fontStyle="italic"
                                textAnchor="middle"
                                fontSize="12px"
                            >
                                <text x="3142.5" y="697.5">
                                    SeleniumJsonMapper
                                </text>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={3020}
                                y={684}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={3015}
                                y="705.5"
                                width={255}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={3015}
                                y="705.5"
                                width={255}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-3019-711-247-26-0">
                                <rect x={3019} y={711} width={247} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-3019-711-247-26-0)"
                                fontSize="12px"
                            >
                                <text x={3021} y="723.5">
                                    -JwtAthFilter
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={3015}
                                y="731.5"
                                width={255}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={3015}
                                y="731.5"
                                width={255}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-3019-737-247-26-0">
                                <rect x={3019} y={737} width={247} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-3019-737-247-26-0)"
                                fontSize="12px"
                            >
                                <text x={3021} y="749.5">
                                    -AuthenticationProvider
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 3015 757.5 L 3015 757.5 L 3270 757.5 L 3270 757.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 3015 757.5 L 3015 861.5 L 3270 861.5 L 3270 757.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 3015 757.5 L 3015 861.5 L 3270 861.5 L 3270 757.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={3020}
                                y={762}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={3015}
                                y="768.5"
                                width={220}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={3015}
                                y="768.5"
                                width={220}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-3019-774-212-26-0">
                                <rect x={3019} y={774} width={212} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-3019-774-212-26-0)"
                                fontSize="12px"
                            >
                                <text x={3021} y="786.5">
                                    + generatePart : HashMap&lt;String,Object&gt;
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={3015}
                                y="794.5"
                                width={250}
                                height={53}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={3015}
                                y="794.5"
                                width={250}
                                height={53}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-3019-800-242-53-0">
                                <rect x={3019} y={800} width={242} height={53} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-3019-800-242-53-0)"
                                fontSize="12px"
                            >
                                <text x={3021} y="812.5">
                                    + jsonToMap{" "}
                                </text>
                                <text x={3021} y="826.5">
                                    : HashMap&lt;String,HashMap&lt;String,Object&gt;&gt;
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={3015}
                                y="835.5"
                                width={220}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={3015}
                                y="835.5"
                                width={220}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <clipPath id="mx-clip-3019-841-212-26-0">
                                <rect x={3019} y={841} width={212} height={26} />
                            </clipPath>
                            <g
                                fill="rgb(0, 0, 0)"
                                fontFamily="Helvetica"
                                clipPath="url(file:///C:/Users/OMISTAJA/Desktop/arp-uml.html#mx-clip-3019-841-212-26-0)"
                                fontSize="12px"
                            >
                                <text x={3021} y="853.5">
                                    + mapToJson : String
                                </text>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 340 180 L 447.96 229.07"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 340 180 L 447.96 229.07"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 434.46 230.08 L 448.98 229.54 L 439.84 218.24"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 434.46 230.08 L 448.98 229.54 L 439.84 218.24"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 205,
                                            marginLeft: 395
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 340 180 L 242 229"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 340 180 L 242 229"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 249.72 217.87 L 241 229.5 L 255.53 229.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 249.72 217.87 L 241 229.5 L 255.53 229.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 205,
                                            marginLeft: 290
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 340 180 L 340 305.76"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 340 180 L 340 305.76"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 333.5 293.88 L 340 306.88 L 346.5 293.88"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 333.5 293.88 L 340 306.88 L 346.5 293.88"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 244,
                                            marginLeft: 340
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 338.74 362.03 L 339.99 558.76"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 338.74 362.03 L 339.99 558.76"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 333.41 546.92 L 339.99 559.88 L 346.41 546.84"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 333.41 546.92 L 339.99 559.88 L 346.41 546.84"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 461,
                                            marginLeft: 339
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 260 614 L 181.71 547.94"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 260 614 L 181.71 547.94"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 194.98 550.64 L 180.85 547.22 L 186.6 560.57"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 194.98 550.64 L 180.85 547.22 L 186.6 560.57"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 580,
                                            marginLeft: 220
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 260 752 L 112.01 824.52"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 260 752 L 112.01 824.52"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 119.82 813.45 L 111 825.01 L 125.54 825.12"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 119.82 813.45 L 111 825.01 L 125.54 825.12"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 789,
                                            marginLeft: 185
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 420 674 L 484.94 701.14"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 420 674 L 484.94 701.14"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 471.47 702.55 L 485.97 701.57 L 476.48 690.56"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 471.47 702.55 L 485.97 701.57 L 476.48 690.56"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 688,
                                            marginLeft: 453
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 637 659.5 L 666.85 625.46"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 637 659.5 L 666.85 625.46"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 663.9 638.68 L 667.58 624.62 L 654.12 630.11"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 663.9 638.68 L 667.58 624.62 L 654.12 630.11"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 641,
                                            marginLeft: 653
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 587 800 L 587 767.12"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 587 800 L 587 767.12"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 587 750.12 L 595.5 767.12 L 578.5 767.12 Z"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 587 750.12 L 595.5 767.12 L 578.5 767.12 Z"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 774,
                                            marginLeft: 587
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Extends
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 790 916 L 790 890 L 940 890 L 940 916"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 790 916 L 790 890 L 940 890 L 940 916"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 790 916 L 790 1124 L 940 1124 L 940 916"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 790 916 L 790 1124 L 940 1124 L 940 916"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 790 916 L 940 916"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 790 916 L 940 916"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 148,
                                            height: 1,
                                            paddingTop: 903,
                                            marginLeft: 791
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                ComponentCollections
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={795}
                                y={895}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={790}
                                y={916}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={790}
                                y={916}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 140,
                                            height: 1,
                                            paddingTop: 923,
                                            marginLeft: 796
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +List&lt;MotherBoard&gt;
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={790}
                                y={942}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={790}
                                y={942}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 140,
                                            height: 1,
                                            paddingTop: 949,
                                            marginLeft: 796
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +List&lt;Case&gt;
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={790}
                                y={968}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={790}
                                y={968}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 140,
                                            height: 1,
                                            paddingTop: 975,
                                            marginLeft: 796
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +List&lt;Cpu&gt;
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={790}
                                y={994}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={790}
                                y={994}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 140,
                                            height: 1,
                                            paddingTop: 1001,
                                            marginLeft: 796
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +List&lt;CpuCooler&gt;
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={790}
                                y={1020}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={790}
                                y={1020}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 140,
                                            height: 1,
                                            paddingTop: 1027,
                                            marginLeft: 796
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +List&lt;Gpu&gt;
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={790}
                                y={1046}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={790}
                                y={1046}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 140,
                                            height: 1,
                                            paddingTop: 1053,
                                            marginLeft: 796
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +List&lt;Ram&gt;
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={790}
                                y={1072}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={790}
                                y={1072}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 140,
                                            height: 1,
                                            paddingTop: 1079,
                                            marginLeft: 796
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +List&lt;PowerUnit&gt;
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={790}
                                y={1098}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={790}
                                y={1098}
                                width={150}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 140,
                                            height: 1,
                                            paddingTop: 1105,
                                            marginLeft: 796
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +List&lt;Storage&gt;
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 420 674 L 598.37 505.54"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 420 674 L 598.37 505.54"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 594.2 518.42 L 599.19 504.77 L 585.27 508.97"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 594.2 518.42 L 599.19 504.77 L 585.27 508.97"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 589,
                                            marginLeft: 510
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 687 702 L 863.46 888.38"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 687 702 L 863.46 888.38"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 850.57 884.22 L 864.23 889.19 L 860.01 875.28"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 850.57 884.22 L 864.23 889.19 L 860.01 875.28"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 796,
                                            marginLeft: 776
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 485 1143 L 418.12 1143"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 485 1143 L 418.12 1143"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 401.12 1143 L 418.12 1134.5 L 418.12 1151.5 Z"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 401.12 1143 L 418.12 1134.5 L 418.12 1151.5 Z"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 1143,
                                            marginLeft: 442
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Extends
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 535 1386 L 535 1360 L 675 1360 L 675 1386"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 535 1386 L 535 1360 L 675 1360 L 675 1386"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 535 1386 L 535 1412 L 675 1412 L 675 1386"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 535 1386 L 535 1412 L 675 1412 L 675 1386"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 535 1386 L 675 1386"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 535 1386 L 675 1386"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 138,
                                            height: 1,
                                            paddingTop: 1373,
                                            marginLeft: 536
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                CpuEntity
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={540}
                                y={1365}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 230 1386 L 230 1360 L 370 1360 L 370 1386"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 230 1386 L 230 1360 L 370 1360 L 370 1386"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 230 1386 L 230 1412 L 370 1412 L 370 1386"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 230 1386 L 230 1412 L 370 1412 L 370 1386"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 230 1386 L 370 1386"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 230 1386 L 370 1386"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 138,
                                            height: 1,
                                            paddingTop: 1373,
                                            marginLeft: 231
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                CaseEntity
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={235}
                                y={1365}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 850 1386 L 850 1360 L 990 1360 L 990 1386"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 850 1386 L 850 1360 L 990 1360 L 990 1386"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 850 1386 L 850 1412 L 990 1412 L 990 1386"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 850 1386 L 850 1412 L 990 1412 L 990 1386"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 850 1386 L 990 1386"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 850 1386 L 990 1386"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 138,
                                            height: 1,
                                            paddingTop: 1373,
                                            marginLeft: 851
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                PowerUnitEntity
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={855}
                                y={1365}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -85 1388 L -85 1362 L 55 1362 L 55 1388"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -85 1388 L -85 1362 L 55 1362 L 55 1388"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M -85 1388 L -85 1414 L 55 1414 L 55 1388"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -85 1388 L -85 1414 L 55 1414 L 55 1388"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M -85 1388 L 55 1388"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -85 1388 L 55 1388"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 138,
                                            height: 1,
                                            paddingTop: 1375,
                                            marginLeft: "-84px"
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                MotherboardEntity
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={-80}
                                y={1367}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 385 1386 L 385 1360 L 525 1360 L 525 1386"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 385 1386 L 385 1360 L 525 1360 L 525 1386"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 385 1386 L 385 1412 L 525 1412 L 525 1386"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 385 1386 L 385 1412 L 525 1412 L 525 1386"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 385 1386 L 525 1386"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 385 1386 L 525 1386"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 138,
                                            height: 1,
                                            paddingTop: 1373,
                                            marginLeft: 386
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                CpuCoolerEntity
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={390}
                                y={1365}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 692 1386 L 692 1360 L 832 1360 L 832 1386"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 692 1386 L 692 1360 L 832 1360 L 832 1386"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 692 1386 L 692 1412 L 832 1412 L 832 1386"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 692 1386 L 692 1412 L 832 1412 L 832 1386"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 692 1386 L 832 1386"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 692 1386 L 832 1386"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 138,
                                            height: 1,
                                            paddingTop: 1373,
                                            marginLeft: 693
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                RamEntity
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={697}
                                y={1365}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 75 1388 L 75 1362 L 215 1362 L 215 1388"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 75 1388 L 75 1362 L 215 1362 L 215 1388"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 75 1388 L 75 1414 L 215 1414 L 215 1388"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 75 1388 L 75 1414 L 215 1414 L 215 1388"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 75 1388 L 215 1388"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 75 1388 L 215 1388"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 138,
                                            height: 1,
                                            paddingTop: 1375,
                                            marginLeft: 76
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                GpuEntity
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={80}
                                y={1367}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1010 1388 L 1010 1362 L 1150 1362 L 1150 1388"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1010 1388 L 1010 1362 L 1150 1362 L 1150 1388"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 1010 1388 L 1010 1414 L 1150 1414 L 1150 1388"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1010 1388 L 1010 1414 L 1150 1414 L 1150 1388"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 1010 1388 L 1150 1388"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1010 1388 L 1150 1388"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 138,
                                            height: 1,
                                            paddingTop: 1375,
                                            marginLeft: 1011
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                StorageEntity
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={1015}
                                y={1367}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 96.42 1360.91 L 61.44 1234.65"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 96.42 1360.91 L 61.44 1234.65"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 56.9 1218.27 L 69.63 1232.38 L 53.25 1236.92 Z"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 56.9 1218.27 L 69.63 1232.38 L 53.25 1236.92 Z"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 1289,
                                            marginLeft: 76
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Extends
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -15 1362 L 14.57 1238.76"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -15 1362 L 14.57 1238.76"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 18.54 1222.23 L 22.84 1240.75 L 6.31 1236.78 Z"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 18.54 1222.23 L 22.84 1240.75 L 6.31 1236.78 Z"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 1292,
                                            marginLeft: 2
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Extends
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 555 1300 L 554.89 1231.63"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 555 1300 L 554.89 1231.63"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 554.86 1214.63 L 563.39 1231.62 L 546.39 1231.64 Z"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 554.86 1214.63 L 563.39 1231.62 L 546.39 1231.64 Z"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 1257,
                                            marginLeft: 555
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Extends
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 35 1300 L 907.22 1300"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 35 1300 L 907.22 1300"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 34.42 1361.79 L 35 1300"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 34.42 1361.79 L 35 1300"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 145 1362 L 145 1300"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 145 1362 L 145 1300"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 300 1360 L 300 1300"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 300 1360 L 300 1300"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 455 1360 L 455 1300"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 455 1360 L 455 1300"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 605 1360 L 605 1300"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 605 1360 L 605 1300"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 762 1360 L 762 1300"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 762 1360 L 762 1300"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 920 1360 L 920 1300"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 920 1360 L 920 1300"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 905 1300 L 1085 1300"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 905 1300 L 1085 1300"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1085 1360 L 1085 1300"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1085 1360 L 1085 1300"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 487 722 L 136.42 1150.27"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 487 722 L 136.42 1150.27"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 138.91 1136.96 L 135.71 1151.13 L 148.97 1145.19"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 138.91 1136.96 L 135.71 1151.13 L 148.97 1145.19"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 937,
                                            marginLeft: 311
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -400 706.5 L -400 680.5 L -240 680.5 L -240 706.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M -400 706.5 L -400 732.5 L -240 732.5 L -240 706.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 706.5 L -400 732.5 L -240 732.5 L -240 706.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M -400 706.5 L -240 706.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 706.5 L -240 706.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 158,
                                            height: 1,
                                            paddingTop: 688,
                                            marginLeft: "-399px"
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                BasicCFactory
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={-395}
                                y={685}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -400 838.5 L -400 812.5 L -240 812.5 L -240 838.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M -400 838.5 L -400 864.5 L -240 864.5 L -240 838.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 838.5 L -400 864.5 L -240 864.5 L -240 838.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M -400 838.5 L -240 838.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 838.5 L -240 838.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 158,
                                            height: 1,
                                            paddingTop: 820,
                                            marginLeft: "-399px"
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                ContentCreatorCFactory
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={-395}
                                y={817}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -400 912.5 L -400 886.5 L -240 886.5 L -240 912.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M -400 912.5 L -400 938.5 L -240 938.5 L -240 912.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 912.5 L -400 938.5 L -240 938.5 L -240 912.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M -400 912.5 L -240 912.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 912.5 L -240 912.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 158,
                                            height: 1,
                                            paddingTop: 894,
                                            marginLeft: "-399px"
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                DeepLearnginCFactory
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={-395}
                                y={891}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -400 1052.5 L -400 1026.5 L -240 1026.5 L -240 1052.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M -400 1052.5 L -400 1078.5 L -240 1078.5 L -240 1052.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 1052.5 L -400 1078.5 L -240 1078.5 L -240 1052.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M -400 1052.5 L -240 1052.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 1052.5 L -240 1052.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 158,
                                            height: 1,
                                            paddingTop: 1034,
                                            marginLeft: "-399px"
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                CryptoCFactory
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={-395}
                                y={1031}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -400 980.5 L -400 954.5 L -240 954.5 L -240 980.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M -400 980.5 L -400 1006.5 L -240 1006.5 L -240 980.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 980.5 L -400 1006.5 L -240 1006.5 L -240 980.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M -400 980.5 L -240 980.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 980.5 L -240 980.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 158,
                                            height: 1,
                                            paddingTop: 962,
                                            marginLeft: "-399px"
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                GamingCFactory
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={-395}
                                y={959}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -400 770.5 L -400 744.5 L -240 744.5 L -240 770.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M -400 770.5 L -400 796.5 L -240 796.5 L -240 770.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 770.5 L -400 796.5 L -240 796.5 L -240 770.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M -400 770.5 L -240 770.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 770.5 L -240 770.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 158,
                                            height: 1,
                                            paddingTop: 752,
                                            marginLeft: "-399px"
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                HomeTheaterCFactory
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={-395}
                                y={749}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -400 487.5 L -400 461.5 L -240 461.5 L -240 487.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M -400 487.5 L -400 513.5 L -240 513.5 L -240 487.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 487.5 L -400 513.5 L -240 513.5 L -240 487.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M -400 487.5 L -240 487.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 487.5 L -240 487.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 158,
                                            height: 1,
                                            paddingTop: 469,
                                            marginLeft: "-399px"
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                SecurityCFactory
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={-395}
                                y={466}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -400 562.5 L -400 536.5 L -240 536.5 L -240 562.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M -400 562.5 L -400 588.5 L -240 588.5 L -240 562.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 562.5 L -400 588.5 L -240 588.5 L -240 562.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M -400 562.5 L -240 562.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 562.5 L -240 562.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 158,
                                            height: 1,
                                            paddingTop: 544,
                                            marginLeft: "-399px"
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                SilentCFactory
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={-395}
                                y={541}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -400 420.5 L -400 394.5 L -240 394.5 L -240 420.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M -400 420.5 L -400 446.5 L -240 446.5 L -240 420.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 420.5 L -400 446.5 L -240 446.5 L -240 420.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M -400 420.5 L -240 420.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 420.5 L -240 420.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 158,
                                            height: 1,
                                            paddingTop: 402,
                                            marginLeft: "-399px"
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                VirtualRealityCFactory
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={-395}
                                y={399}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -400 347.5 L -400 321.5 L -240 321.5 L -240 347.5"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M -400 347.5 L -400 373.5 L -240 373.5 L -240 347.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 347.5 L -400 373.5 L -240 373.5 L -240 347.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M -400 347.5 L -240 347.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -400 347.5 L -240 347.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 158,
                                            height: 1,
                                            paddingTop: 329,
                                            marginLeft: "-399px"
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                WorkStationCFactory
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={-395}
                                y={326}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -170 347.5 L -240 347.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -170 347.5 L -240 347.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -170 419.94 L -240 419.94"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -170 419.94 L -240 419.94"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -170 486.94 L -240 486.94"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -170 486.94 L -240 486.94"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -170 561.94 L -240 561.94"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -170 561.94 L -240 561.94"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -170 636.94 L -240 636.94"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -170 636.94 L -240 636.94"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -170 911.94 L -240 911.94"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -170 911.94 L -240 911.94"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -170 979.94 L -240 979.94"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -170 979.94 L -240 979.94"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -170 769.94 L -240 769.94"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -170 769.94 L -240 769.94"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -170 837.94 L -240 837.94"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -170 837.94 L -240 837.94"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -170 705.94 L -240 705.94"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -170 705.94 L -240 705.94"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -170 1051.94 L -240 1051.94"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -170 1051.94 L -240 1051.94"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -170 1058.45 L -170 344.5"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -170 1058.45 L -170 344.5"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M -170 700 L 241.88 700"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M -170 700 L 241.88 700"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 258.88 700 L 241.88 708.5 L 241.88 691.5 Z"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 258.88 700 L 241.88 708.5 L 241.88 691.5 Z"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 700,
                                            marginLeft: 45
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Extends
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 765 1216 L 765 1176 L 965 1176 L 965 1216"
                                fill="rgb(255, 255, 255)"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                            <path
                                d="M 765 1216 L 765 1242 L 965 1242 L 965 1216"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 765 1216 L 765 1242 L 965 1242 L 965 1216"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                            <path
                                d="M 765 1216 L 965 1216"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 765 1216 L 965 1216"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="none"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe center",
                                            width: 198,
                                            height: 1,
                                            paddingTop: 1183,
                                            marginLeft: 766
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 12,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    fontWeight: "bold",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                &lt;&lt;Interface&gt;&gt;
                                                <br />
                                                ComponentFilterer
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g style={{ visibility: "visible" }}>
                            <image
                                x={770}
                                y={1181}
                                width={9}
                                height={9}
                                xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5cHgiIGhlaWdodD0iOXB4IiB2ZXJzaW9uPSIxLjEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDEiIHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMzAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwOyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNBRkIwQjY7IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHN0cm9rZT0iIzhBOTRBNSIgZmlsbD0idXJsKCNncmFkMSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gMiA0LjUgTCA3IDQuNSB6IiBzdHJva2U9IiMwMDAiLz48L3N2Zz4="
                                preserveAspectRatio="none"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <rect
                                x={765}
                                y={1216}
                                width={200}
                                height={26}
                                fill="none"
                                stroke="white"
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <rect
                                x={765}
                                y={1216}
                                width={200}
                                height={26}
                                fill="none"
                                stroke="none"
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe flex-start",
                                            justifyContent: "unsafe flex-start",
                                            width: 190,
                                            height: 1,
                                            paddingTop: 1223,
                                            marginLeft: 771
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "left",
                                                maxHeight: 22,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    whiteSpace: "normal",
                                                    overflowWrap: "normal"
                                                }}
                                            >
                                                +findBestMatch : ComponentEntity
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 635.72 1069.82 L 813.08 1174.86"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 635.72 1069.82 L 813.08 1174.86"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 799.54 1174.4 L 814.04 1175.43 L 806.16 1163.21"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 799.54 1174.4 L 814.04 1175.43 L 806.16 1163.21"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 1123,
                                            marginLeft: 725
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 625 1169 L 771.46 1025.21"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 625 1169 L 771.46 1025.21"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 789.3 1007.69 L 785.53 1021.7 L 771.46 1025.21 L 775.23 1011.2 Z"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 789.3 1007.69 L 785.53 1021.7 L 771.46 1025.21 L 775.23 1011.2 Z"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 467 930 L 109.28 666.88"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 467 930 L 109.28 666.88"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 122.7 668.68 L 108.38 666.22 L 115 679.16"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 122.7 668.68 L 108.38 666.22 L 115 679.16"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 798,
                                            marginLeft: 287
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1175 270 L 1175 333.76"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1175 270 L 1175 333.76"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 1168.5 321.88 L 1175 334.88 L 1181.5 321.88"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1168.5 321.88 L 1175 334.88 L 1181.5 321.88"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 303,
                                            marginLeft: 1175
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 955 540 L 1085.04 451.22"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 955 540 L 1085.04 451.22"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 1099.08 441.63 L 1089.83 458.24 L 1080.24 444.2 Z"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1099.08 441.63 L 1089.83 458.24 L 1080.24 444.2 Z"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 490,
                                            marginLeft: 1028
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Extends
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1175 570.5 L 1175 528.12"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1175 570.5 L 1175 528.12"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 1175 511.12 L 1183.5 528.12 L 1166.5 528.12 Z"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1175 511.12 L 1183.5 528.12 L 1166.5 528.12 Z"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 541,
                                            marginLeft: 1175
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Extends
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 955 630 L 955 684.76"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 955 630 L 955 684.76"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 948.5 672.88 L 955 685.88 L 961.5 672.88"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 948.5 672.88 L 955 685.88 L 961.5 672.88"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 659,
                                            marginLeft: 955
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1175 680.5 L 1032.07 739.15"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1175 680.5 L 1032.07 739.15"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 1040.59 728.63 L 1031.03 739.58 L 1045.53 740.65"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1040.59 728.63 L 1031.03 739.58 L 1045.53 740.65"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 710,
                                            marginLeft: 1103
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1385 490.5 L 1267.01 447.24"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1385 490.5 L 1267.01 447.24"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 1251.05 441.38 L 1269.94 439.26 L 1264.08 455.22 Z"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1251.05 441.38 L 1269.94 439.26 L 1264.08 455.22 Z"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 466,
                                            marginLeft: 1317
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Extends
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1385 490.5 L 1436.77 450.79"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1385 490.5 L 1436.77 450.79"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 1450.26 440.44 L 1441.95 457.53 L 1431.6 444.04 Z"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1450.26 440.44 L 1441.95 457.53 L 1431.6 444.04 Z"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 465,
                                            marginLeft: 1418
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Extends
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1385 646.5 L 1385 574.62"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1385 646.5 L 1385 574.62"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 1385 557.62 L 1393.5 574.62 L 1376.5 574.62 Z"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1385 557.62 L 1393.5 574.62 L 1376.5 574.62 Z"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 602,
                                            marginLeft: 1385
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Extends
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1775 200 L 1757.25 355.78"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1775 200 L 1757.25 355.78"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 1752.14 343.24 L 1757.13 356.89 L 1765.06 344.71"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1752.14 343.24 L 1757.13 356.89 L 1765.06 344.71"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 279,
                                            marginLeft: 1766
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1775 200 L 2001.15 354.74"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1775 200 L 2001.15 354.74"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 1987.68 353.39 L 2002.08 355.37 L 1995.02 342.66"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1987.68 353.39 L 2002.08 355.37 L 1995.02 342.66"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 278,
                                            marginLeft: 1889
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1757 508 L 1686.53 583.37"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1757 508 L 1686.53 583.37"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 1689.89 570.25 L 1685.76 584.18 L 1699.39 579.13"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1689.89 570.25 L 1685.76 584.18 L 1699.39 579.13"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 547,
                                            marginLeft: 1721
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 2003 506 L 1767.34 642.11"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2003 506 L 1767.34 642.11"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 1774.37 630.54 L 1766.37 642.67 L 1780.88 641.79"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1774.37 630.54 L 1766.37 642.67 L 1780.88 641.79"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 575,
                                            marginLeft: 1884
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 1757 508 L 1898.79 728.12"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1757 508 L 1898.79 728.12"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 1886.89 721.65 L 1899.39 729.06 L 1897.82 714.61"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1886.89 721.65 L 1899.39 729.06 L 1897.82 714.61"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 619,
                                            marginLeft: 1828
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 2003 506 L 1965.37 727.8"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2003 506 L 1965.37 727.8"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 1960.95 714.99 L 1965.19 728.9 L 1973.77 717.17"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 1960.95 714.99 L 1965.19 728.9 L 1973.77 717.17"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 618,
                                            marginLeft: 1984
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 2110 745.5 L 2032.15 768.37"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2110 745.5 L 2032.15 768.37"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 2041.71 758.78 L 2031.07 768.68 L 2045.38 771.26"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2041.71 758.78 L 2031.07 768.68 L 2045.38 771.26"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 757,
                                            marginLeft: 2070
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 2417.5 608.5 L 2225.1 679.72"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2417.5 608.5 L 2225.1 679.72"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 2233.98 669.5 L 2224.05 680.11 L 2238.5 681.69"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2233.98 669.5 L 2224.05 680.11 L 2238.5 681.69"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 645,
                                            marginLeft: 2320
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 2422 610.69 L 2575.46 679.58"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2422 610.69 L 2575.46 679.58"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 2561.96 680.65 L 2576.48 680.04 L 2567.28 668.79"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2561.96 680.65 L 2576.48 680.04 L 2567.28 668.79"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 646,
                                            marginLeft: 2500
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 2580 680 L 2748.87 557.44"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2580 680 L 2748.87 557.44"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 2743.08 569.68 L 2749.78 556.78 L 2735.44 559.16"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 2743.08 569.68 L 2749.78 556.78 L 2735.44 559.16"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 618,
                                            marginLeft: 2665
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
                            <path
                                d="M 3142.5 620 L 3142.5 677.26"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 3142.5 620 L 3142.5 677.26"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                strokeDasharray="3 3"
                                pointerEvents="stroke"
                            />
                            <path
                                d="M 3136 665.38 L 3142.5 678.38 L 3149 665.38"
                                fill="none"
                                stroke="white"
                                strokeMiterlimit={10}
                                pointerEvents="stroke"
                                visibility="hidden"
                                strokeWidth={9}
                            />
                            <path
                                d="M 3136 665.38 L 3142.5 678.38 L 3149 665.38"
                                fill="none"
                                stroke="rgb(0, 0, 0)"
                                strokeMiterlimit={10}
                                pointerEvents="all"
                            />
                        </g>
                        <g style={{}}>
                            <g>
                                <foreignObject
                                    pointerEvents="none"
                                    width="100%"
                                    height="100%"
                                    style={{ overflow: "visible", textAlign: "left" }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "unsafe center",
                                            justifyContent: "unsafe center",
                                            width: 1,
                                            height: 1,
                                            paddingTop: 650,
                                            marginLeft: 3143
                                        }}
                                    >
                                        <div
                                            data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                            style={{
                                                boxSizing: "border-box",
                                                fontSize: 0,
                                                textAlign: "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: 11,
                                                    fontFamily: "Helvetica",
                                                    color: "rgb(0, 0, 0)",
                                                    lineHeight: "1.2",
                                                    pointerEvents: "all",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                Use
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </g>
                    </g>
                    <g />
                    <g />
                </g>
            </svg>
        </div>

    )

};

export default UMLDiagram;

