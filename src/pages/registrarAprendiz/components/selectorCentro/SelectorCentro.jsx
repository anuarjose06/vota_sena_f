import Select from 'react-select'


// Recibe el valor seleccionado y la función para avisar al formulario padre
function SelectorCentro({ value, onChange }) {
  // Datos temporales mientras conectas la base de datos
  const opcionesTemporales = [
    { value: 1, label: "Centro de Gestión de Mercados, Logística y TI" },
    { value: 2, label: "Centro de Electricidad, Electrónica y Telecomunicaciones" },
    { value: 3, label: "Centro Industrial y de Desarrollo Empresarial de Soacha" }
  ];

  return (
    <div>
      <label>Seleccione Centro de Formación</label>
      <Select
        options={opcionesTemporales}
        value={value}
        onChange={onChange}
        placeholder="Selecciona el centro"
        noOptionsMessage={() => "No se encontró ese centro"}
        isClearable
      />
    </div>
  );
}

export default SelectorCentro;
