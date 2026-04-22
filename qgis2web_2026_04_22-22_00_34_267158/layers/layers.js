ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([109.787560, -7.843676, 110.173965, -7.568571]);
var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_faskes_1 = new ol.format.GeoJSON();
var features_faskes_1 = format_faskes_1.readFeatures(json_faskes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_faskes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_faskes_1.addFeatures(features_faskes_1);
var lyr_faskes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_faskes_1, 
                style: style_faskes_1,
                popuplayertitle: 'faskes',
                interactive: true,
                title: '<img src="styles/legend/faskes_1.png" /> faskes'
            });
var format_Purworejo_2 = new ol.format.GeoJSON();
var features_Purworejo_2 = format_Purworejo_2.readFeatures(json_Purworejo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Purworejo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Purworejo_2.addFeatures(features_Purworejo_2);
var lyr_Purworejo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Purworejo_2, 
                style: style_Purworejo_2,
                popuplayertitle: 'Purworejo',
                interactive: true,
                title: '<img src="styles/legend/Purworejo_2.png" /> Purworejo'
            });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_faskes_1.setVisible(true);lyr_Purworejo_2.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_faskes_1,lyr_Purworejo_2];
lyr_faskes_1.set('fieldAliases', {'nama_faskes': 'nama_faskes', 'jenis_faskes': 'jenis_faskes', 'kecamatan': 'kecamatan', 'alamat': 'alamat', 'latitude': 'latitude', 'longitude': 'longitude', 'sumber_data': 'sumber_data', 'catatan': 'catatan', });
lyr_Purworejo_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_faskes_1.set('fieldImages', {'nama_faskes': 'TextEdit', 'jenis_faskes': 'TextEdit', 'kecamatan': 'TextEdit', 'alamat': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'sumber_data': 'TextEdit', 'catatan': 'TextEdit', });
lyr_Purworejo_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_faskes_1.set('fieldLabels', {'nama_faskes': 'inline label - always visible', 'jenis_faskes': 'no label', 'kecamatan': 'no label', 'alamat': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'sumber_data': 'no label', 'catatan': 'no label', });
lyr_Purworejo_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_Purworejo_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});