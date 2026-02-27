// ══ PARTÍCULAS ══
(function(){
  const c=document.getElementById('particles');
  const cols=['#38bdf8','#a78bfa','#34d399','#f59e0b','#f472b6'];
  for(let i=0;i<20;i++){
    const p=document.createElement('div');p.className='particle';
    const s=Math.random()*4+2;
    p.style.cssText=`width:${s}px;height:${s}px;background:${cols[i%cols.length]};left:${Math.random()*100}%;bottom:-10px;animation-duration:${Math.random()*8+6}s;animation-delay:${Math.random()*10}s;box-shadow:0 0 ${s*2}px ${cols[i%cols.length]};`;
    c.appendChild(p);
  }
})();

// ══ 27 PLANTILLAS ══
const TEMPLATES = [

  /* ────────── BUSCAR (4) ────────── */
  {
    id:'buscar-string', cat:'buscar',
    title:'Buscar por String (DNI, nombre, código)',
    desc:'Devuelve el objeto que coincida con el String recibido, o null si no existe.',
    keywords:['buscar','dni','nombre','codigo','string','null','encontrar por texto'],
    steps:[
      'Inicializar <code>encontrado = null</code> e <code>i = 0</code>',
      'While: <code>encontrado == null &amp;&amp; i &lt; lista.size()</code>',
      'Si coincide → asignar a <code>encontrado</code>; si no → <code>i++</code>',
      'Retornar <code>encontrado</code> (null si no se encontró)'
    ],
    codes:[`<span class="kw">private</span> <span class="tp">Persona</span> <span class="fn">buscarPorDni</span>(<span class="tp">String</span> <span class="str">dniIn</span>) {
    <span class="tp">Persona</span> <span class="str">encontrada</span> = <span class="kw">null</span>;
    <span class="kw">int</span> <span class="str">i</span> = <span class="nm">0</span>;

    <span class="kw">while</span> (<span class="str">i</span> &lt; agenda.size() &amp;&amp; <span class="str">encontrada</span> == <span class="kw">null</span>) {
        <span class="tp">Persona</span> <span class="str">actual</span> = agenda.get(<span class="str">i</span>);
        <span class="kw">if</span> (<span class="str">actual</span>.getDni().equals(<span class="str">dniIn</span>)) {
            <span class="str">encontrada</span> = <span class="str">actual</span>;
        } <span class="kw">else</span> {
            <span class="str">i</span>++;
        }
    }
    <span class="kw">return</span> <span class="str">encontrada</span>;
}`],
    alerts:[{type:'warn',msg:'Solo incrementar <code>i</code> en el <code>else</code>. Si coincide, NO incrementar.'}]
  },

  {
    id:'buscar-int', cat:'buscar',
    title:'Buscar por int (número, id, código numérico)',
    desc:'Devuelve el objeto que coincida con un entero recibido, o null si no existe.',
    keywords:['buscar','id','numero','codigo','entero','int','socio','producto'],
    steps:[
      'Inicializar <code>encontrado = null</code> e <code>i = 0</code>',
      'While: <code>encontrado == null &amp;&amp; i &lt; lista.size()</code>',
      'Usar método helper <code>mismoNumero()</code> para comparar el int',
      'Retornar <code>encontrado</code>'
    ],
    codes:[`<span class="kw">private</span> <span class="tp">Socio</span> <span class="fn">buscarPorNumero</span>(<span class="kw">int</span> <span class="str">numero</span>) {
    <span class="tp">Socio</span> <span class="str">encontrado</span> = <span class="kw">null</span>;
    <span class="kw">int</span> <span class="str">i</span> = <span class="nm">0</span>;

    <span class="kw">while</span> (<span class="str">i</span> &lt; socios.size() &amp;&amp; <span class="str">encontrado</span> == <span class="kw">null</span>) {
        <span class="tp">Socio</span> <span class="str">actual</span> = socios.get(<span class="str">i</span>);
        <span class="kw">if</span> (<span class="str">actual</span>.mismoNumero(<span class="str">numero</span>)) {
            <span class="str">encontrado</span> = <span class="str">actual</span>;
        } <span class="kw">else</span> {
            <span class="str">i</span>++;
        }
    }
    <span class="kw">return</span> <span class="str">encontrado</span>;
}`,
`<span class="cm">// En la clase Socio:</span>
<span class="kw">public boolean</span> <span class="fn">mismoNumero</span>(<span class="kw">int</span> <span class="str">n</span>) {
    <span class="kw">return this</span>.numero == <span class="str">n</span>;
}`],
    alerts:[{type:'info',msg:'Delegar la comparación al propio objeto con <code>mismo...()</code>. Más limpio y orientado a objetos.'}]
  },

  {
    id:'buscar-indice', cat:'buscar',
    title:'Buscar índice de un elemento',
    desc:'Devuelve la posición (índice) del objeto en la lista, o -1 si no existe.',
    keywords:['buscar','indice','posicion','index','-1','retorna posicion'],
    steps:[
      'Inicializar <code>idx = -1</code> e <code>i = 0</code>',
      'While: <code>idx == -1 &amp;&amp; i &lt; lista.size()</code>',
      'Si coincide → <code>idx = i</code>; si no → <code>i++</code>',
      'Retornar <code>idx</code> (−1 si no se encontró)'
    ],
    codes:[`<span class="kw">private int</span> <span class="fn">buscarIndicePorDni</span>(<span class="tp">String</span> <span class="str">dni</span>) {
    <span class="kw">int</span> <span class="str">idx</span> = -<span class="nm">1</span>;
    <span class="kw">int</span> <span class="str">i</span> = <span class="nm">0</span>;

    <span class="kw">while</span> (<span class="str">i</span> &lt; agenda.size() &amp;&amp; <span class="str">idx</span> == -<span class="nm">1</span>) {
        <span class="tp">Persona</span> <span class="str">actual</span> = agenda.get(<span class="str">i</span>);
        <span class="kw">if</span> (<span class="str">actual</span>.getDni().equals(<span class="str">dni</span>)) {
            <span class="str">idx</span> = <span class="str">i</span>;
        } <span class="kw">else</span> {
            <span class="str">i</span>++;
        }
    }
    <span class="kw">return</span> <span class="str">idx</span>;
}`],
    alerts:[{type:'info',msg:'Usar cuando luego necesitás <code>lista.set(idx, nuevoObjeto)</code> para reemplazar un elemento.'}]
  },

  {
    id:'existe', cat:'buscar',
    title:'Verificar si existe (devuelve boolean)',
    desc:'Devuelve true si existe algún elemento que cumpla la condición.',
    keywords:['existe','verificar','comprobar','boolean','hay','tiene','ya existe'],
    steps:[
      'Inicializar <code>existe = false</code> e <code>i = 0</code>',
      'While: <code>!existe &amp;&amp; i &lt; lista.size()</code>',
      'Si coincide → <code>existe = true</code>; <code>i++</code> siempre (también en el if)',
      'Retornar <code>existe</code>'
    ],
    codes:[`<span class="kw">public boolean</span> <span class="fn">existeConDni</span>(<span class="tp">String</span> <span class="str">dni</span>) {
    <span class="kw">boolean</span> <span class="str">existe</span> = <span class="kw">false</span>;
    <span class="kw">int</span> <span class="str">i</span> = <span class="nm">0</span>;

    <span class="kw">while</span> (!<span class="str">existe</span> &amp;&amp; <span class="str">i</span> &lt; agenda.size()) {
        <span class="tp">Persona</span> <span class="str">actual</span> = agenda.get(<span class="str">i</span>);
        <span class="kw">if</span> (<span class="str">actual</span>.getDni().equals(<span class="str">dni</span>)) {
            <span class="str">existe</span> = <span class="kw">true</span>;
        }
        <span class="str">i</span>++;
    }
    <span class="kw">return</span> <span class="str">existe</span>;
}`],
    alerts:[{type:'ok',msg:'Acá <code>i++</code> va fuera del if (siempre incrementa). La condición de corte es <code>!existe</code>.'}]
  },

  /* ────────── AGREGAR (2) ────────── */
  {
    id:'agregar-simple', cat:'agregar',
    title:'Agregar objeto simple',
    desc:'Agrega un objeto nuevo a la lista. Devuelve true si se pudo agregar.',
    keywords:['agregar','añadir','add','nuevo','insertar','alta','lista'],
    steps:[
      'Validar que los parámetros no sean null o vacíos',
      'Crear el nuevo objeto con los datos recibidos',
      'Llamar a <code>lista.add(nuevo)</code>',
      'Retornar el resultado de <code>add()</code>'
    ],
    codes:[`<span class="kw">public boolean</span> <span class="fn">agregarPersona</span>(<span class="tp">String</span> <span class="str">nombre</span>, <span class="tp">String</span> <span class="str">apellido</span>, <span class="tp">String</span> <span class="str">dni</span>) {
    <span class="kw">boolean</span> <span class="str">agregado</span> = <span class="kw">false</span>;

    <span class="kw">if</span> (<span class="str">nombre</span> != <span class="kw">null</span> &amp;&amp; <span class="str">apellido</span> != <span class="kw">null</span> &amp;&amp; <span class="str">dni</span> != <span class="kw">null</span>) {
        <span class="tp">Persona</span> <span class="str">nueva</span> = <span class="kw">new</span> <span class="tp">Persona</span>(<span class="str">nombre</span>, <span class="str">apellido</span>, <span class="str">dni</span>);
        <span class="str">agregado</span> = agenda.add(<span class="str">nueva</span>);
    }
    <span class="kw">return</span> <span class="str">agregado</span>;
}`]
  },

  {
    id:'agregar-sin-repetir', cat:'agregar',
    title:'Agregar solo si no existe (sin repetidos)',
    desc:'Agrega el objeto únicamente si no hay otro con el mismo identificador.',
    keywords:['agregar','sin repetir','no existe','duplicado','unico','ya existe','no repetir'],
    steps:[
      'Llamar al helper privado <code>buscarPorDni(dni)</code>',
      'Si retorna <code>null</code> → no existe → crear y agregar',
      'Si ya existe → NO agregar',
      'Retornar <code>true</code> si se agregó, <code>false</code> si ya existía'
    ],
    codes:[`<span class="kw">public boolean</span> <span class="fn">agregarPersona</span>(<span class="tp">String</span> <span class="str">nombre</span>, <span class="tp">String</span> <span class="str">apellido</span>, <span class="tp">String</span> <span class="str">dni</span>) {
    <span class="kw">boolean</span> <span class="str">agregado</span> = <span class="kw">false</span>;
    <span class="tp">Persona</span> <span class="str">existente</span> = buscarPorDni(<span class="str">dni</span>);

    <span class="kw">if</span> (<span class="str">existente</span> == <span class="kw">null</span>) {
        <span class="tp">Persona</span> <span class="str">nueva</span> = <span class="kw">new</span> <span class="tp">Persona</span>(<span class="str">nombre</span>, <span class="str">apellido</span>, <span class="str">dni</span>);
        <span class="str">agregado</span> = agenda.add(<span class="str">nueva</span>);
    }
    <span class="kw">return</span> <span class="str">agregado</span>;
}`],
    alerts:[{type:'warn',msg:'Siempre usar un método <code>buscar...()</code> privado como helper. No escribir el while directamente acá.'}]
  },

  /* ────────── REGISTRAR (1) ────────── */
  {
    id:'registrar-colchon', cat:'registrar',
    title:'Registrar con tope por tipo (Colchón)',
    desc:'Registra un colchón validando que no esté duplicado y que no se supere el tope del tipo.',
    keywords:['registrar','colchon','tope','tipo','espuma','resortes','latex','ortopedico','tope por tipo'],
    steps:[
      'Verificar que los datos no sean null',
      'Buscar si ya existe un colchón con ese código',
      'Verificar que la cantidad de ese tipo no supere el tope (<code>topePorTipo()</code>)',
      'Si todo ok → crear y agregar; retornar <code>true</code>'
    ],
    codes:[`<span class="kw">public boolean</span> <span class="fn">registrarColchon</span>(<span class="kw">int</span> <span class="str">codigo</span>, <span class="tp">TipoColchon</span> <span class="str">tipo</span>, <span class="kw">double</span> <span class="str">precio</span>) {
    <span class="kw">boolean</span> <span class="str">registrado</span> = <span class="kw">false</span>;
    <span class="tp">Colchon</span> <span class="str">existente</span> = buscarPorCodigo(<span class="str">codigo</span>);

    <span class="kw">if</span> (<span class="str">existente</span> == <span class="kw">null</span> &amp;&amp; <span class="str">tipo</span> != <span class="kw">null</span>) {
        <span class="kw">if</span> (!superaTope(<span class="str">tipo</span>)) {
            <span class="tp">Colchon</span> <span class="str">nuevo</span> = <span class="kw">new</span> <span class="tp">Colchon</span>(<span class="str">codigo</span>, <span class="str">tipo</span>, <span class="str">precio</span>);
            <span class="str">registrado</span> = colchones.add(<span class="str">nuevo</span>);
        }
    }
    <span class="kw">return</span> <span class="str">registrado</span>;
}

<span class="kw">private boolean</span> <span class="fn">superaTope</span>(<span class="tp">TipoColchon</span> <span class="str">tipo</span>) {
    <span class="tp">Colchon</span> <span class="str">tmp</span> = <span class="kw">new</span> <span class="tp">Colchon</span>(<span class="nm">0</span>, <span class="str">tipo</span>, <span class="nm">0</span>);
    <span class="kw">return</span> contarPorTipo(<span class="str">tipo</span>) >= <span class="str">tmp</span>.topePorTipo();
}

<span class="kw">private int</span> <span class="fn">contarPorTipo</span>(<span class="tp">TipoColchon</span> <span class="str">tipo</span>) {
    <span class="kw">int</span> <span class="str">cant</span> = <span class="nm">0</span>;
    <span class="kw">for</span> (<span class="tp">Colchon</span> <span class="str">c</span> : colchones) {
        <span class="kw">if</span> (<span class="str">c</span>.getTipo() == <span class="str">tipo</span>) { <span class="str">cant</span>++; }
    }
    <span class="kw">return</span> <span class="str">cant</span>;
}`,
`<span class="cm">// En la clase Colchon:</span>
<span class="kw">public int</span> <span class="fn">topePorTipo</span>() {
    <span class="kw">switch</span> (tipo) {
        <span class="kw">case</span> <span class="nm">ESPUMA</span>:     <span class="kw">return</span> <span class="nm">4</span>;
        <span class="kw">case</span> <span class="nm">RESORTES</span>:   <span class="kw">return</span> <span class="nm">3</span>;
        <span class="kw">case</span> <span class="nm">LATEX</span>:      <span class="kw">return</span> <span class="nm">2</span>;
        <span class="kw">case</span> <span class="nm">ORTOPEDICO</span>: <span class="kw">return</span> <span class="nm">2</span>;
        <span class="kw">default</span>:         <span class="kw">return</span> <span class="nm">0</span>;
    }
}`],
    alerts:[{type:'info',msg:'La regla del tope la sabe el propio <code>Colchon</code> (delegación). El Service solo consulta y decide.'}]
  },

  /* ────────── ELIMINAR (4) ────────── */
  {
    id:'eliminar-bool', cat:'eliminar',
    title:'Eliminar → devolver boolean',
    desc:'Busca y elimina el elemento. Retorna true si se eliminó, false si no existía.',
    keywords:['eliminar','borrar','remover','quitar','baja','remove','boolean'],
    steps:[
      'Llamar al helper privado <code>buscarPorDni(dni)</code>',
      'Si encontrado != null → <code>lista.remove(p)</code> → <code>eliminado = true</code>',
      'Retornar <code>eliminado</code>'
    ],
    codes:[`<span class="kw">public boolean</span> <span class="fn">eliminarPorDni</span>(<span class="tp">String</span> <span class="str">dni</span>) {
    <span class="kw">boolean</span> <span class="str">eliminado</span> = <span class="kw">false</span>;
    <span class="tp">Persona</span> <span class="str">p</span> = buscarPorDni(<span class="str">dni</span>);

    <span class="kw">if</span> (<span class="str">p</span> != <span class="kw">null</span>) {
        agenda.remove(<span class="str">p</span>);
        <span class="str">eliminado</span> = <span class="kw">true</span>;
    }
    <span class="kw">return</span> <span class="str">eliminado</span>;
}`]
  },

  {
    id:'eliminar-objeto', cat:'eliminar',
    title:'Eliminar → devolver el objeto eliminado',
    desc:'Busca, elimina y retorna el elemento removido (o null si no existía).',
    keywords:['eliminar','borrar','remover','devolver eliminado','retorna objeto'],
    steps:[
      'Buscar con helper → <code>removida = buscarPorDni(dni)</code>',
      'Si encontrado → <code>lista.remove(removida)</code>',
      'Retornar <code>removida</code> (null si no existía)'
    ],
    codes:[`<span class="kw">public</span> <span class="tp">Persona</span> <span class="fn">removerPersona</span>(<span class="tp">String</span> <span class="str">dni</span>) {
    <span class="tp">Persona</span> <span class="str">removida</span> = buscarPorDni(<span class="str">dni</span>);

    <span class="kw">if</span> (<span class="str">removida</span> != <span class="kw">null</span>) {
        agenda.remove(<span class="str">removida</span>);
    }
    <span class="kw">return</span> <span class="str">removida</span>;
}`],
    alerts:[{type:'info',msg:'Útil cuando querés procesar o mostrar el elemento después de eliminarlo.'}]
  },

  {
    id:'baja-logica', cat:'eliminar',
    title:'Baja lógica (no elimina, cambia estado)',
    desc:'NO remueve de la lista. Marca el objeto como inactivo cambiando su estado interno.',
    keywords:['baja logica','baja','inactivo','activo','estado','soft delete','darDeBaja','no eliminar'],
    steps:[
      'Buscar el objeto con helper',
      'Si existe → llamar <code>p.darDeBaja()</code>',
      'El objeto cambia internamente a inactivo',
      'Retornar <code>true</code>'
    ],
    codes:[`<span class="kw">public boolean</span> <span class="fn">darDeBajaPorDni</span>(<span class="tp">String</span> <span class="str">dni</span>) {
    <span class="kw">boolean</span> <span class="str">ok</span> = <span class="kw">false</span>;
    <span class="tp">Persona</span> <span class="str">p</span> = buscarPorDni(<span class="str">dni</span>);

    <span class="kw">if</span> (<span class="str">p</span> != <span class="kw">null</span>) {
        <span class="str">p</span>.darDeBaja();
        <span class="str">ok</span> = <span class="kw">true</span>;
    }
    <span class="kw">return</span> <span class="str">ok</span>;
}`,
`<span class="cm">// En la clase Persona:</span>
<span class="kw">private boolean</span> activo = <span class="kw">true</span>;

<span class="kw">public void</span> <span class="fn">darDeBaja</span>()   { <span class="kw">this</span>.activo = <span class="kw">false</span>; }
<span class="kw">public boolean</span> <span class="fn">estaActivo</span>() { <span class="kw">return this</span>.activo; }`],
    alerts:[{type:'warn',msg:'El objeto sigue en la lista. Al listar, filtrá con <code>estaActivo()</code>.'}]
  },

  {
    id:'eliminar-condicion', cat:'eliminar',
    title:'Eliminar todos los que cumplen condición',
    desc:'Recorre la lista y elimina TODOS los elementos que cumplen un criterio.',
    keywords:['eliminar','todos','condicion','por ciudad','por tipo','varios','multiples'],
    steps:[
      'Inicializar <code>i = 0</code> — NUNCA usar for-each aquí',
      'While: <code>i &lt; lista.size()</code>',
      'Si cumple → <code>lista.remove(i)</code> — NO incrementar <code>i</code>',
      'Si no cumple → <code>i++</code>'
    ],
    codes:[`<span class="kw">public boolean</span> <span class="fn">eliminarPorCiudad</span>(<span class="tp">String</span> <span class="str">ciudad</span>) {
    <span class="kw">boolean</span> <span class="str">eliminado</span> = <span class="kw">false</span>;
    <span class="kw">int</span> <span class="str">i</span> = <span class="nm">0</span>;

    <span class="kw">while</span> (<span class="str">i</span> &lt; lista.size()) {
        <span class="tp">Persona</span> <span class="str">p</span> = lista.get(<span class="str">i</span>);
        <span class="kw">if</span> (<span class="str">p</span>.getDomicilio().getCiudad().equals(<span class="str">ciudad</span>)) {
            lista.remove(<span class="str">i</span>);
            <span class="str">eliminado</span> = <span class="kw">true</span>;
            <span class="cm">// NO i++ — el siguiente ya subió a esta posición</span>
        } <span class="kw">else</span> {
            <span class="str">i</span>++;
        }
    }
    <span class="kw">return</span> <span class="str">eliminado</span>;
}`],
    alerts:[{type:'warn',msg:'NUNCA usar for-each cuando se elimina. Al hacer remove(i), el siguiente elemento toma esa posición.'}]
  },

  /* ────────── MODIFICAR (2) ────────── */
  {
    id:'modificar-atributo', cat:'modificar',
    title:'Modificar atributo de un objeto',
    desc:'Busca el objeto y le cambia uno de sus atributos usando el setter. Retorna true si se modificó.',
    keywords:['modificar','cambiar','actualizar','set','setter','nuevo valor','cambiar nombre'],
    steps:[
      'Buscar con helper privado',
      'Si encontrado != null y nuevo valor válido → llamar al setter',
      'Retornar <code>true</code>'
    ],
    codes:[`<span class="kw">public boolean</span> <span class="fn">modificarApellido</span>(<span class="tp">String</span> <span class="str">dni</span>, <span class="tp">String</span> <span class="str">nuevoApellido</span>) {
    <span class="kw">boolean</span> <span class="str">modificado</span> = <span class="kw">false</span>;
    <span class="tp">Persona</span> <span class="str">p</span> = buscarPorDni(<span class="str">dni</span>);

    <span class="kw">if</span> (<span class="str">p</span> != <span class="kw">null</span> &amp;&amp; <span class="str">nuevoApellido</span> != <span class="kw">null</span>) {
        <span class="str">p</span>.setApellido(<span class="str">nuevoApellido</span>);
        <span class="str">modificado</span> = <span class="kw">true</span>;
    }
    <span class="kw">return</span> <span class="str">modificado</span>;
}`]
  },

  {
    id:'reemplazar-objeto', cat:'modificar',
    title:'Reemplazar objeto completo (set por índice)',
    desc:'Busca el índice y reemplaza el objeto entero usando list.set().',
    keywords:['reemplazar','set','objeto completo','indice','cambiar objeto entero'],
    steps:[
      'Buscar índice con helper que retorna int',
      'Si idx != -1 → <code>lista.set(idx, nueva)</code>',
      'Retornar <code>true</code>'
    ],
    codes:[`<span class="kw">public boolean</span> <span class="fn">reemplazarPersona</span>(<span class="tp">String</span> <span class="str">dni</span>, <span class="tp">Persona</span> <span class="str">nueva</span>) {
    <span class="kw">boolean</span> <span class="str">reemplazo</span> = <span class="kw">false</span>;

    <span class="kw">if</span> (<span class="str">nueva</span> != <span class="kw">null</span>) {
        <span class="kw">int</span> <span class="str">idx</span> = buscarIndicePorDni(<span class="str">dni</span>);
        <span class="kw">if</span> (<span class="str">idx</span> != -<span class="nm">1</span>) {
            agenda.set(<span class="str">idx</span>, <span class="str">nueva</span>);
            <span class="str">reemplazo</span> = <span class="kw">true</span>;
        }
    }
    <span class="kw">return</span> <span class="str">reemplazo</span>;
}`]
  },

  /* ────────── LISTAR (2) ────────── */
  {
    id:'listar-todos', cat:'listar',
    title:'Listar todos los elementos',
    desc:'Recorre la lista completa e imprime cada elemento con println.',
    keywords:['listar','mostrar','imprimir','todos','foreach','println','recorrer'],
    steps:[
      'For-each sobre la lista completa',
      'Llamar <code>System.out.println(p)</code> por cada elemento'
    ],
    codes:[`<span class="kw">public void</span> <span class="fn">listarPersonas</span>() {
    <span class="kw">for</span> (<span class="tp">Persona</span> <span class="str">p</span> : agenda) {
        System.out.println(<span class="str">p</span>);
    }
}`],
    alerts:[{type:'info',msg:'For-each válido cuando <strong>no se elimina ni inserta</strong> durante el recorrido.'}]
  },

  {
    id:'listar-condicion', cat:'listar',
    title:'Listar solo los que cumplen condición',
    desc:'Imprime únicamente los elementos que satisfacen un criterio.',
    keywords:['listar','mostrar','condicion','filtrado','solo los que','activos','por ciudad'],
    codes:[`<span class="kw">public void</span> <span class="fn">listarPorCiudad</span>(<span class="tp">String</span> <span class="str">ciudad</span>) {
    <span class="kw">for</span> (<span class="tp">Persona</span> <span class="str">p</span> : agenda) {
        <span class="kw">if</span> (<span class="str">p</span>.getDomicilio() != <span class="kw">null</span>
                &amp;&amp; <span class="str">p</span>.getDomicilio().getCiudad().equals(<span class="str">ciudad</span>)) {
            System.out.println(<span class="str">p</span>);
        }
    }
}`]
  },

  /* ────────── CONTAR (1) ────────── */
  {
    id:'contar', cat:'contar',
    title:'Contar cuántos cumplen una condición',
    desc:'Retorna un int con la cantidad de elementos que satisfacen el criterio.',
    keywords:['contar','cuantos','cantidad','count','total','por ciudad','por tipo'],
    steps:[
      'Inicializar <code>contador = 0</code>',
      'Recorrer <strong>toda</strong> la lista (sin condición de corte)',
      'Si cumple → <code>contador++</code>',
      'Retornar <code>contador</code>'
    ],
    codes:[`<span class="kw">public int</span> <span class="fn">contarPorCiudad</span>(<span class="tp">String</span> <span class="str">ciudad</span>) {
    <span class="kw">int</span> <span class="str">contador</span> = <span class="nm">0</span>;

    <span class="kw">for</span> (<span class="tp">Persona</span> <span class="str">p</span> : agenda) {
        <span class="kw">if</span> (<span class="str">p</span>.getDomicilio() != <span class="kw">null</span>
                &amp;&amp; <span class="str">p</span>.getDomicilio().getCiudad().equals(<span class="str">ciudad</span>)) {
            <span class="str">contador</span>++;
        }
    }
    <span class="kw">return</span> <span class="str">contador</span>;
}`],
    alerts:[{type:'ok',msg:'Se recorre <strong>toda</strong> la lista sin condición de corte. Distinto a buscar.'}]
  },

  /* ────────── MÁX / MÍN (2) ────────── */
  {
    id:'maximo', cat:'max',
    title:'Obtener el elemento con mayor valor',
    desc:'Devuelve el objeto cuyo valor es el máximo. Retorna null si la lista está vacía.',
    keywords:['mayor','maximo','max','mejor','mas alto','mas caro','obtener mayor'],
    steps:[
      'Inicializar <code>mejor = null</code>',
      'Recorrer toda la lista',
      'Si <code>mejor == null</code> O <code>actual > mejor</code> → <code>mejor = actual</code>',
      'Retornar <code>mejor</code>'
    ],
    codes:[`<span class="kw">public</span> <span class="tp">Persona</span> <span class="fn">obtenerMayor</span>() {
    <span class="tp">Persona</span> <span class="str">mejor</span> = <span class="kw">null</span>;

    <span class="kw">for</span> (<span class="tp">Persona</span> <span class="str">p</span> : agenda) {
        <span class="kw">if</span> (<span class="str">mejor</span> == <span class="kw">null</span>
                || <span class="str">p</span>.getApellido().compareToIgnoreCase(<span class="str">mejor</span>.getApellido()) &gt; <span class="nm">0</span>) {
            <span class="str">mejor</span> = <span class="str">p</span>;
        }
    }
    <span class="kw">return</span> <span class="str">mejor</span>;
}`],
alerts:[{
  type:'warn',
  msg:'Inicializar en <code>null</code> cuando se busca el mayor o menor <b>objeto</b>. La condición <code>mejor == null</code> permite asignar el primer elemento antes de comenzar las comparaciones.'
}]
  },

  {
    id:'minimo', cat:'max',
    title:'Obtener el elemento con menor valor',
    desc:'Devuelve el objeto cuyo valor es el mínimo. Para numéricos se puede usar Integer.MAX_VALUE.',
    keywords:['menor','minimo','min','mas bajo','mas barato','obtener menor'],
    codes:[`<span class="cm">// Versión 1: devuelve el objeto (recomendado)</span>
<span class="kw">public</span> <span class="tp">Producto</span> <span class="fn">obtenerMasBarato</span>() {
    <span class="tp">Producto</span> <span class="str">mejor</span> = <span class="kw">null</span>;

    <span class="kw">for</span> (<span class="tp">Producto</span> <span class="str">p</span> : productos) {
        <span class="kw">if</span> (<span class="str">mejor</span> == <span class="kw">null</span> || <span class="str">p</span>.getPrecio() &lt; <span class="str">mejor</span>.getPrecio()) {
            <span class="str">mejor</span> = <span class="str">p</span>;
        }
    }
    <span class="kw">return</span> <span class="str">mejor</span>;
}`,
`<span class="cm">// Versión 2: devuelve solo el valor mínimo</span>
<span class="kw">public int</span> <span class="fn">obtenerPrecioMinimo</span>() {
    <span class="kw">int</span> <span class="str">min</span> = Integer.MAX_VALUE;

    <span class="kw">for</span> (<span class="tp">Producto</span> <span class="str">p</span> : productos) {
        <span class="kw">if</span> (<span class="str">p</span>.getPrecio() &lt; <span class="str">min</span>) {
            <span class="str">min</span> = <span class="str">p</span>.getPrecio();
        }
    }
    <span class="kw">return</span> <span class="str">min</span>;
}`]
  },

  /* ────────── PROMEDIO (1) ────────── */
  {
    id:'promedio', cat:'promedio',
    title:'Calcular promedio',
    desc:'Suma una métrica de todos los elementos y divide por la cantidad. Maneja lista vacía.',
    keywords:['promedio','average','media','acumular','suma','calcular promedio'],
    steps:[
      'Inicializar <code>acum = 0</code>',
      'Recorrer y acumular el valor de cada elemento',
      'Si lista NO está vacía → <code>acum = acum / lista.size()</code>',
      'Si vacía → retornar <code>0</code>'
    ],
    codes:[`<span class="kw">public double</span> <span class="fn">calcularPromedioPrecio</span>() {
    <span class="kw">double</span> <span class="str">acum</span> = <span class="nm">0</span>;

    <span class="kw">for</span> (<span class="tp">Producto</span> <span class="str">p</span> : productos) {
        <span class="str">acum</span> = <span class="str">acum</span> + <span class="str">p</span>.getPrecio();
    }

    <span class="kw">if</span> (!productos.isEmpty()) {
        <span class="str">acum</span> = <span class="str">acum</span> / productos.size();
    } <span class="kw">else</span> {
        <span class="str">acum</span> = <span class="nm">0</span>;
    }
    <span class="kw">return</span> <span class="str">acum</span>;
}`],
    alerts:[{type:'warn',msg:'Verificar siempre que la lista no esté vacía antes de dividir (evita división por cero).'}]
  },

  /* ────────── FILTRAR (2) ────────── */
  {
    id:'filtrar-lista', cat:'filtrar',
    title:'Filtrar → devolver lista nueva',
    desc:'Crea y devuelve una nueva ArrayList con los elementos que cumplen la condición. La original no cambia.',
    keywords:['filtrar','lista nueva','devolver lista','obtener lista','todos los que','coleccion','vitalicios'],
    steps:[
      'Crear <code>ArrayList resultado = new ArrayList&lt;&gt;()</code>',
      'Recorrer la lista original con for-each',
      'Si cumple condición → <code>resultado.add(actual)</code>',
      'Retornar <code>resultado</code>'
    ],
    codes:[`<span class="kw">public</span> ArrayList&lt;<span class="tp">Socio</span>&gt; <span class="fn">obtenerVitalicios</span>() {
    ArrayList&lt;<span class="tp">Socio</span>&gt; <span class="str">resultado</span> = <span class="kw">new</span> ArrayList&lt;&gt;();

    <span class="kw">for</span> (<span class="tp">Socio</span> <span class="str">s</span> : socios) {
        <span class="kw">if</span> (<span class="str">s</span>.esVitalicio()) {
            <span class="str">resultado</span>.add(<span class="str">s</span>);
        }
    }
    <span class="kw">return</span> <span class="str">resultado</span>;
}`],
    alerts:[{type:'ok',msg:'La lista original NO se modifica. La nueva lista tiene referencias a los mismos objetos.'}]
  },

  {
    id:'sin-repetidos', cat:'filtrar',
    title:'Lista sin repetidos (sin usar contains)',
    desc:'Construye una lista nueva sin duplicados. No se permite usar contains(); solo while.',
    keywords:['sin repetidos','duplicados','unique','no repetir','sin contains','lista unica'],
    steps:[
      'Crear <code>ArrayList resultado</code> vacío',
      'Para cada elemento verificar con helper si ya está en resultado',
      'Si NO está → agregar',
      'Retornar resultado'
    ],
    codes:[`<span class="kw">public</span> ArrayList&lt;<span class="tp">Tipo</span>&gt; <span class="fn">obtenerSinRepetidos</span>() {
    ArrayList&lt;<span class="tp">Tipo</span>&gt; <span class="str">res</span> = <span class="kw">new</span> ArrayList&lt;&gt;();
    <span class="kw">int</span> <span class="str">i</span> = <span class="nm">0</span>;

    <span class="kw">while</span> (<span class="str">i</span> &lt; lista.size()) {
        <span class="tp">Tipo</span> <span class="str">actual</span> = lista.get(<span class="str">i</span>);
        <span class="kw">if</span> (!existeEnLista(<span class="str">res</span>, <span class="str">actual</span>)) {
            <span class="str">res</span>.add(<span class="str">actual</span>);
        }
        <span class="str">i</span>++;
    }
    <span class="kw">return</span> <span class="str">res</span>;
}

<span class="kw">private boolean</span> <span class="fn">existeEnLista</span>(ArrayList&lt;<span class="tp">Tipo</span>&gt; <span class="str">res</span>, <span class="tp">Tipo</span> <span class="str">buscado</span>) {
    <span class="kw">boolean</span> <span class="str">existe</span> = <span class="kw">false</span>;
    <span class="kw">int</span> <span class="str">j</span> = <span class="nm">0</span>;
    <span class="kw">while</span> (!<span class="str">existe</span> &amp;&amp; <span class="str">j</span> &lt; <span class="str">res</span>.size()) {
        <span class="kw">if</span> (<span class="str">res</span>.get(<span class="str">j</span>).coincide(<span class="str">buscado</span>)) { <span class="str">existe</span> = <span class="kw">true</span>; }
        <span class="str">j</span>++;
    }
    <span class="kw">return</span> <span class="str">existe</span>;
}`]
  },

  /* ────────── FINALIZAR (1) ────────── */
  {
    id:'finalizar', cat:'finalizar',
    title:'Finalizar / mover entre listas',
    desc:'Busca un elemento en la lista origen, cambia su estado y lo mueve a la lista de completados.',
    keywords:['finalizar','cambiar estado','mover','completar','pasar','pendiente a finalizado','cerrar','hecho'],
    steps:[
      'Inicializar <code>hecho = false</code> e <code>i = 0</code>',
      'While: <code>!hecho &amp;&amp; i &lt; pendientes.size()</code>',
      'Si coincide → remove(i), cambiar estado, add a completadas, <code>hecho = true</code>',
      'Si no → <code>i++</code>'
    ],
    codes:[`<span class="kw">public boolean</span> <span class="fn">finalizar</span>(<span class="kw">int</span> <span class="str">id</span>) {
    <span class="kw">boolean</span> <span class="str">hecho</span> = <span class="kw">false</span>;
    <span class="kw">int</span> <span class="str">i</span> = <span class="nm">0</span>;

    <span class="kw">while</span> (!<span class="str">hecho</span> &amp;&amp; <span class="str">i</span> &lt; pendientes.size()) {
        <span class="tp">Tarea</span> <span class="str">actual</span> = pendientes.get(<span class="str">i</span>);

        <span class="kw">if</span> (<span class="str">actual</span>.mismoId(<span class="str">id</span>)) {
            pendientes.remove(<span class="str">i</span>);
            <span class="str">actual</span>.setEstado(<span class="tp">Estado</span>.FINALIZADO);
            completadas.add(<span class="str">actual</span>);
            <span class="str">hecho</span> = <span class="kw">true</span>;
        } <span class="kw">else</span> {
            <span class="str">i</span>++;
        }
    }
    <span class="kw">return</span> <span class="str">hecho</span>;
}`]
  },

  /* ────────── VALIDAR (3) ────────── */
  {
    id:'validar-string', cat:'validar',
    title:'Validar String no vacío',
    desc:'Verifica que el String no sea null y no esté vacío.',
    keywords:['validar','string','vacio','null','no vacio','valido'],
    codes:[`<span class="kw">public boolean</span> <span class="fn">stringValido</span>(<span class="tp">String</span> <span class="str">valor</span>) {
    <span class="kw">boolean</span> <span class="str">valido</span> = <span class="kw">false</span>;

    <span class="kw">if</span> (<span class="str">valor</span> != <span class="kw">null</span> &amp;&amp; !<span class="str">valor</span>.isEmpty()) {
        <span class="str">valido</span> = <span class="kw">true</span>;
    }
    <span class="kw">return</span> <span class="str">valido</span>;
}`]
  },

{
  id:'validar-dni', 
  cat:'validar',
  title:'Validar DNI (7 u 8 dígitos)',
  desc:'Verifica que el DNI no sea null, tenga 7 u 8 dígitos y contenga solo números.',
  keywords:['validar','dni','digitos','string','while','solo numeros','7 digitos','8 digitos'],
  codes:[`<span class="kw">public</span> <span class="tp">boolean</span> <span class="fn">validarDni</span>(<span class="tp">String</span> <span class="str">dni</span>) {

<span class="tp">boolean</span> <span class="str">valido</span> = <span class="kw">false</span>;
<span class="tp">int</span> <span class="str">longitud</span>;
<span class="tp">int</span> <span class="str">i</span> = 0;
<span class="tp">boolean</span> <span class="str">soloNumeros</span> = <span class="kw">false</span>;
<span class="tp">char</span> <span class="str">c</span>;

<span class="kw">if</span> (<span class="str">dni</span> != <span class="kw">null</span>) {

    <span class="str">longitud</span> = <span class="str">dni</span>.length();

    <span class="kw">if</span> (<span class="str">longitud</span> == 7 || <span class="str">longitud</span> == 8) {

        <span class="str">soloNumeros</span> = <span class="kw">true</span>;

        <span class="kw">while</span> (<span class="str">i</span> &lt; <span class="str">longitud</span> &amp;&amp; <span class="str">soloNumeros</span>) {

            <span class="str">c</span> = <span class="str">dni</span>.charAt(<span class="str">i</span>);

            <span class="kw">if</span> (<span class="str">c</span> &lt; '0' || <span class="str">c</span> &gt; '9') {
                <span class="str">soloNumeros</span> = <span class="kw">false</span>;
            }

            <span class="str">i</span>++;
        }

        <span class="str">valido</span> = <span class="str">soloNumeros</span>;
    }
}

<span class="kw">return</span> <span class="str">valido</span>;
}`]
},

  {
    id:'validar-rango', cat:'validar',
    title:'Validar rango numérico',
    desc:'Verifica que un número esté dentro de un rango [min, max] inclusive.',
    keywords:['validar','rango','minimo','maximo','entre','numero','limite'],
    codes:[`<span class="kw">public boolean</span> <span class="fn">validarRango</span>(<span class="kw">int</span> <span class="str">valor</span>, <span class="kw">int</span> <span class="str">min</span>, <span class="kw">int</span> <span class="str">max</span>) {
    <span class="kw">boolean</span> <span class="str">valido</span> = <span class="kw">false</span>;

    <span class="kw">if</span> (<span class="str">valor</span> &gt;= <span class="str">min</span> &amp;&amp; <span class="str">valor</span> &lt;= <span class="str">max</span>) {
        <span class="str">valido</span> = <span class="kw">true</span>;
    }
    <span class="kw">return</span> <span class="str">valido</span>;
}`]
  },

  /* ────────── ENUM (2) ────────── */
  {
    id:'enum-switch', cat:'enum',
    title:'Enum: Obtener valor según tipo (switch)',
    desc:'Devuelve un valor numérico según el tipo del enum. Ideal para topes, precios base o prioridades.',
    keywords:['enum','switch','tipo','case','tope','valor segun tipo','espuma','resortes'],
    codes:[`<span class="cm">// En la clase de dominio (ej: Colchon):</span>
<span class="kw">public int</span> <span class="fn">topePorTipo</span>() {
    <span class="kw">switch</span> (tipo) {
        <span class="kw">case</span> <span class="nm">ESPUMA</span>:     <span class="kw">return</span> <span class="nm">4</span>;
        <span class="kw">case</span> <span class="nm">RESORTES</span>:   <span class="kw">return</span> <span class="nm">3</span>;
        <span class="kw">case</span> <span class="nm">LATEX</span>:      <span class="kw">return</span> <span class="nm">2</span>;
        <span class="kw">case</span> <span class="nm">ORTOPEDICO</span>: <span class="kw">return</span> <span class="nm">2</span>;
        <span class="kw">default</span>:         <span class="kw">return</span> <span class="nm">0</span>;
    }
}`],
    alerts:[{type:'info',msg:'Cada <code>case</code> hace su propio <code>return</code>. El <code>default</code> es obligatorio como respaldo.'}]
  },

  {
    id:'enum-pertenece', cat:'enum',
    title:'Enum: Verificar si un valor pertenece al enum',
    desc:'Recorre Estado.values() y devuelve true si el estado recibido es válido.',
    keywords:['enum','pertenece','estado','values','valido','existe en enum'],
    codes:[`<span class="kw">public boolean</span> <span class="fn">perteneceAEstado</span>(<span class="tp">Estado</span> <span class="str">estado</span>) {
    <span class="kw">boolean</span> <span class="str">pertenece</span> = <span class="kw">false</span>;
    <span class="kw">int</span> <span class="str">i</span> = <span class="nm">0</span>;

    <span class="kw">if</span> (<span class="str">estado</span> != <span class="kw">null</span>) {
        <span class="tp">Estado</span>[] <span class="str">estados</span> = <span class="tp">Estado</span>.values();

        <span class="kw">while</span> (<span class="str">i</span> &lt; <span class="str">estados</span>.length) {
            <span class="kw">if</span> (<span class="str">estados</span>[<span class="str">i</span>] == <span class="str">estado</span>) { <span class="str">pertenece</span> = <span class="kw">true</span>; }
            <span class="str">i</span>++;
        }
    }
    <span class="kw">return</span> <span class="str">pertenece</span>;
}`],
    alerts:[{type:'ok',msg:'<code>Estado.values()</code> retorna un <strong>array</strong>. Se recorre con índice, no con for-each de ArrayList.'}]
  }

]; // fin TEMPLATES

// ══ STATE & LÓGICA ══
let currentCat = 'all';
let openCards   = new Set();

function setSearch(v) {
  document.getElementById('searchInput').value = v;
  doSearch();
}

function setCategory(cat, btn) {
  currentCat = cat;
  document.querySelectorAll('.qf-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  render();
}

function doSearch() {
  currentCat = 'all';
  document.querySelectorAll('.qf-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('[data-cat="all"]').classList.add('active');
  render();
}

function render() {
  const q         = document.getElementById('searchInput').value.trim().toLowerCase();
  const container = document.getElementById('cardsContainer');
  const noRes     = document.getElementById('noResults');
  const meta      = document.getElementById('resultsMeta');

  let results = [...TEMPLATES];
  if (currentCat !== 'all') results = results.filter(t => t.cat === currentCat);

  if (q) {
    const ws = q.split(/\s+/).filter(Boolean);
    results = results
      .map(t => {
        const h = (t.title + ' ' + t.desc + ' ' + (t.keywords || []).join(' ')).toLowerCase();
        let s = 0;
        ws.forEach(w => { if (h.includes(w)) s += t.title.toLowerCase().includes(w) ? 3 : 1; });
        return { t, s };
      })
      .filter(r => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .map(r => r.t);
  }

  if (!results.length) {
    container.innerHTML = '';
    noRes.style.display = 'block';
    meta.textContent    = '';
    return;
  }

  noRes.style.display = 'none';
  meta.innerHTML = `<strong>${results.length}</strong> plantilla${results.length !== 1 ? 's' : ''} encontrada${results.length !== 1 ? 's' : ''}`;
  container.innerHTML = results.map((t, i) => buildCard(t, i)).join('');
  openCards.forEach(id => {
    const el = container.querySelector(`[data-id="${id}"]`);
    if (el) el.classList.add('open');
  });
}

function buildCard(t, idx) {
  const sh = t.steps?.length
    ? `<div class="section-label">Pasos</div><ul class="steps-list">${t.steps.map(s => `<li>${s}</li>`).join('')}</ul>`
    : '';
  const ch = (t.codes || []).map(c => `
    <div class="code-wrap">
      <div class="code-lang"><span>Java</span><button class="copy-btn" onclick="copyCode(this)">Copiar</button></div>
      <pre>${c}</pre>
    </div>`).join('');
  const ah = (t.alerts || []).map(a => `
    <div class="alert-box alert-${a.type}">
      <span class="alert-icon">${a.type === 'warn' ? '⚠️' : a.type === 'ok' ? '✅' : 'ℹ️'}</span>
      <span>${a.msg}</span>
    </div>`).join('');

  return `
  <div class="template-card" data-id="${t.id}" style="animation-delay:${idx * 28}ms">
    <div class="card-header" onclick="toggleCard('${t.id}')">
      <span class="card-badge badge-${t.cat}">${t.cat.toUpperCase()}</span>
      <div style="flex:1">
        <div class="card-title">${t.title}</div>
        <div class="card-desc">${t.desc}</div>
      </div>
      <span class="card-chevron">▼</span>
    </div>
    <div class="card-body">
      <div class="card-body-inner">
        ${sh}
        ${t.steps?.length ? '<div class="section-label" style="margin-top:14px">Código</div>' : '<div class="section-label">Código</div>'}
        ${ch}${ah}
      </div>
    </div>
  </div>`;
}

function toggleCard(id) {
  const el = document.querySelector(`[data-id="${id}"]`);
  if (!el) return;
  el.classList.toggle('open');
  if (openCards.has(id)) openCards.delete(id); else openCards.add(id);
}

function copyCode(btn) {
  const plain = btn.closest('.code-wrap').querySelector('pre').innerText;
  navigator.clipboard.writeText(plain).then(() => {
    btn.textContent = '✓ Copiado';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copiar'; btn.classList.remove('copied'); }, 1800);
  });
}

render();