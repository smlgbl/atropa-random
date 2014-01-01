
  
/* vsdoc for _global_ */

(function (window) {
    

    window._global_ = {
        /// <summary></summary>
        /// <returns type="_global_"/>
                
    };

    var $x = window._global_;
    $x.__namespace = "true";
    $x.__typeName = "_global_";
})(this);

  

  
/* vsdoc for atropa */

(function (window) {
    

    window.atropa = {
        /// <summary></summary>
        /// <field name="data" type="">Container for gobal data related to the classes and functions.</field>
        /// <field name="random" type="">Provides random strings and numbers.</field>
        /// <returns type="atropa"/>
                
        supportCheck: function(className, errorMessage) {
            /// <summary>Checks whether this class has been marked as unsupported and throws an 
            ///  error if it has.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="errorMessage" type="String">Optional. A custom error message. Defaults to
            ///  atropa.data[className].error</param>
        }, 
        
        requires: function(className, requirementFn, errorMessage) {
            /// <summary>Pushes a requirement check into atropa.data.requirements. The test
            ///  tests whether the class is supported in this environment. Sets
            ///  atropa.data[className]&apos;s support to unsupported and error to errorMessage
            ///  if the requirementFn returns false. The requirement checks will all be run
            ///  after the library has loaded.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="requirementFn" type="Function">A function to test whether or not the class
            ///  is supported in this environment. If supported, returns true otherwise
            ///  return false.</param>
            /// <param name="errorMessage" type="String">The error message to use when this class or its
            ///  methods are called in unsupported environments. Defaults to:
            ///  &apos;The atropa.&apos; + className + &apos; class is unsupported in this environment.&apos;;</param>
        }
        
    };

    var $x = window.atropa;
    $x.__namespace = "true";
    $x.__typeName = "atropa";
})(this);

  

  
/* vsdoc for atropa.data */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.data = {
        /// <summary></summary>
        /// <returns type="atropa.data"/>
                
    };

    var $x = window.atropa.data;
    $x.__namespace = "true";
    $x.__typeName = "atropa.data";
})(this);

  

  
/* vsdoc for atropa.random */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.random = {
        /// <summary></summary>
        /// <returns type="atropa.random"/>
                
        string: function(stringLength, characterClass) {
            /// <summary>Gives you a random string whose length and characters you specify.</summary>
            /// <param name="stringLength" type="Number">This is the length of the string.</param>
            /// <param name="characterClass" type="String">Optional. May be one of:
            ///  numeric, caps, lower, alpha, alphanumeric, punctuation, vowel, consonant
            ///  This is the type of characters you want returned to you. Defaults to
            ///  alphanumeric.</param>
            /// <returns type="String">A random string of specified length and composition.</returns>
        }, 
        
        integer: function(min, max) {
            /// <summary>Generates a random number between the specified min and max value.</summary>
            /// <param name="min" type="Number">The lowest number you want returned</param>
            /// <param name="max" type="Number">The highest number you want returned</param>
            /// <returns type="Number">A random number within the specified range.</returns>
        }, 
        
        getPropertyName: function(obj) {
            /// <summary>Get a random property name from the given object.</summary>
            /// <param name="obj" type="Object">The object to select a random
            ///  property name from.</param>
            /// <returns type="String">A random property name from the
            ///  given object.</returns>
        }, 
        
        getArrayKey: function(arr) {
            /// <summary>Get a random key from the given array.</summary>
            /// <param name="arr" type="Array">The array to select a random
            ///  key from. The keys of the array must be contiguous.</param>
            /// <returns type="Number">A random integer between 0 and
            ///  &lt;code&gt;arr.length&lt;/code&gt;</returns>
        }, 
        
        getArrayValue: function(arr) {
            /// <summary>Get a random value from the given array.</summary>
            /// <param name="arr" type="Array">The array to select a random
            ///  value from. The keys of the array must be contiguous.</param>
            /// <returns type="Mixed">A random value from the given array.</returns>
        }, 
        
        pullArrayElement: function(arr) {
            /// <summary>Remove a random element from the given array.</summary>
            /// <param name="arr" type="Array">The array to remove a random
            ///  element from. The keys of the array must be contiguous.</param>
            /// <returns type="Mixed">A random value from the given array.</returns>
        }, 
        
        pullProperty: function(obj) {
            /// <summary>Remove a random property from the given object.</summary>
            /// <param name="obj" type="Object">The object to remove a random
            ///  property from.</param>
            /// <returns type="Mixed">A random value from the given object.</returns>
        }
        
    };

    var $x = window.atropa.random;
    $x.__namespace = "true";
    $x.__typeName = "atropa.random";
})(this);

  

